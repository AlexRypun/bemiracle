import { Global, Module } from '@nestjs/common';

import { MailerService } from './mailer.service';
import { TemplatesModule } from '../templates/templates.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TemplatesModule, UsersModule],
  providers: [MailerService],
  exports: [MailerService]
})
@Global()
export class MailerModule {}
