import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ContactController } from './controllers/contact.controller';
import { EmailService } from './mail/mailer.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // Para Gmail
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || 'tiagoalmeidasantos1812@gmail.com',
          pass: process.env.EMAIL_PASS || 'ayas zuha khkz ppyp',
        },
      },
      defaults: {
        from: process.env.EMAIL_USER || 'tiagoalmeidasantos1812@gmail.com',
      },
      template: {
        dir: join(__dirname, '..', 'src', 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController, ContactController],
  providers: [AppService, EmailService],
})
export class AppModule {}
