import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'O email é obrigatório' })
  @IsEmail({}, { message: 'Digite um email válido' })
  email: string;

  @IsNotEmpty({ message: 'O assunto é obrigatório' })
  @IsString({ message: 'O assunto deve ser uma string' })
  @MinLength(3, { message: 'O assunto deve ter pelo menos 3 caracteres' })
  subject: string;

  @IsNotEmpty({ message: 'A mensagem é obrigatória' })
  @IsString({ message: 'A mensagem deve ser uma string' })
  @MinLength(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
  message: string;
}
