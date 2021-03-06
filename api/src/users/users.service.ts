import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { compare } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { UserGroup } from './userGroup.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TemplatesService } from '../templates/templates.service';
import { MailerService } from '../mailer/mailer.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    private readonly templatesService: TemplatesService,
    private readonly mailerService: MailerService,
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    @InjectRepository(UserGroup)
    private readonly userGroupRepository: Repository<UserGroup>
  ) {
  }

  async signUp(params: CreateUserDto): Promise<User> {
    const user = new User();
    User.merge(user, params);
    const userGroup = await this.userGroupRepository.findOne(this.configService.get('app.userRole.user'));
    user.groups = [userGroup];
    return await user.save();
  }

  async signIn(email: string, password: string): Promise<User> {
    const query = this.userRepository.createQueryBuilder('user').innerJoinAndSelect('user.groups', 'groups');
    query.addSelect('password', 'user_password');
    query.where({ email });
    const user = await query.getOne();
    if (user && await compare(password, user.password)) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ id });
    if (user) {
      return user;
    }

    throw new NotFoundException();
  }

  async updateUser(id: number, params: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    User.merge(user, params);
    await this.userRepository.save(user, { reload: true });
    return user;
  }

  isAdmin(user: User): boolean {
    const adminRoleId = this.configService.get<number>('app.userRole.admin');
    return Array.isArray(user.groups) && user.groups.some(group => group.id === adminRoleId);
  }

  async sendWelcomeEmail(userId: number): Promise<boolean> {
    const user = await this.getUserById(userId);
    const body = await this.templatesService.generate('emails.welcome', { name: user.name });

    return this.mailerService.sendMail(user.email, 'Welcome to bemiracle', body);
  }
}
