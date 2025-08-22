import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { EmailService } from '../mail/mailer.service';
import { ContactDto } from '../dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  @HttpCode(HttpStatus.OK)
  async sendContactEmail(@Body() contactData: ContactDto) {
    try {
      await this.emailService.sendContactEmail(contactData);
      
      return {
        success: true,
        message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
      };
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      
      return {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
        error: error.message,
      };
    }
  }
}
