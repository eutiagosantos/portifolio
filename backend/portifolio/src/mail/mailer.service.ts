import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactDto } from '../dto/contact.dto';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendContactEmail(contactData: ContactDto): Promise<void> {
    const { name, email, subject, message } = contactData;

    await this.mailerService.sendMail({
      to: 'tiagoalmeidasantos1812@gmail.com', // Seu email de destino
      subject: `Nova mensagem de contato: ${subject}`,
      template: 'contact', // Nome do template (vamos criar)
      context: {
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString('pt-BR'),
      },
    });

    // Enviar confirmação para o remetente
    await this.mailerService.sendMail({
      to: email,
      subject: 'Confirmação de mensagem enviada - Tiago Santos',
      template: 'confirmation',
      context: {
        name,
        subject,
        date: new Date().toLocaleString('pt-BR'),
      },
    });
  }
}