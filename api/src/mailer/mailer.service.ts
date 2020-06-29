import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';

import { SentMessageInfo } from './mailer.interfaces';

@Injectable()
export class MailerService {
  private readonly transporter: Transporter;

  constructor(
    private readonly configService: ConfigService
  ) {
    const mailerConfig = this.configService.get('mailer.transport');
    this.transporter = createTransport(mailerConfig);
  }

  async sendMail(recipients: string | string[], subject: string, body: string, html = true): Promise<boolean> {
    const from = this.configService.get<string>('mailer.from');
    try {
      const result: SentMessageInfo = await this.transporter.sendMail({
        from,
        to: recipients,
        subject,
        [html ? 'html' : 'text']: body
      });
      return result.response.includes('Ok:');
    } catch (e) {
      return false;
    }
  }
}
