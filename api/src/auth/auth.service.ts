import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshToken } from './refreshToken.entity';

import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { IJwtTokens } from './jwt-tokens.interface';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepository: Repository<RefreshToken>
  ) {
  }

  async signInUser(email: string, password: string): Promise<IJwtTokens> {
    const user = await this.userService.signIn(email, password);
    delete user.password;
    return this.generateTokensPair(user.id, user);
  }

  async signUpUser(params: CreateUserDto): Promise<User> {
    const user = await this.userService.signUp(params);
    await this.userService.sendWelcomeEmail(user.id);
    return user;
  }

  async refreshTokens(refreshToken: string): Promise<IJwtTokens> {
    let tokenError = '';
    try {
      await this.jwtService.verifyAsync(refreshToken);
      const token = await this.refreshTokenRepository.findOne({ token: refreshToken });
      if (!token) {
        tokenError = 'invalid token';
      }
    } catch (e) {
      tokenError = e.message;
    }
    if (tokenError) {
      throw new UnauthorizedException(tokenError);
    }

    const data = await this.jwtService.decode(refreshToken);
    if (typeof data !== 'object') {
      throw new UnprocessableEntityException();
    }
    const user = await this.userService.getUserById(data.id);
    return this.generateTokensPair(user.id, user);
  }

  private async generateTokensPair(userId: number, payload: { [key: string]: any }): Promise<IJwtTokens> {
    delete payload.refreshToken;
    delete payload.iat;
    delete payload.exp;
    const jwtRefreshExpiresIn = this.configService.get('app.jwtRefreshExpiresIn');
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync({ ...payload }),
      this.jwtService.signAsync({ ...payload, refreshToken: true }, { expiresIn: jwtRefreshExpiresIn }),
      this.refreshTokenRepository.delete({ userId })
    ]);
    await this.refreshTokenRepository.save({ token: refreshToken, userId });
    return { accessToken, refreshToken };
  }
}
