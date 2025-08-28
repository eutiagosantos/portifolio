import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS para produção e desenvolvimento
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000', 
      'http://localhost:4173',
      'http://localhost:8080',
      'http://localhost:8081',
      'https://portifolio-ashen-xi.vercel.app', // URL principal da Vercel
      'https://portifolio-hqyue8nte-tiagoalmeidasantos1812-1479s-projects.vercel.app', // URL de deployment
      /https:\/\/.*\.vercel\.app$/, // Qualquer subdomínio da Vercel
      process.env.FRONTEND_URL // URL adicional do frontend
    ].filter(Boolean),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  
  // Configurar validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  console.log(`🚀 Servidor rodando na porta ${port}`);
}
bootstrap();
