import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiKeyGuard } from './common/guards/api-key.guard';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const reflector = app.get(Reflector);

  // Global guards (applied in order)
  app.useGlobalGuards(
    new ApiKeyGuard(configService), // First: Check API key
    new JwtAuthGuard(reflector),     // Second: Check JWT (if not public)
    new RolesGuard(reflector),       // Third: Check roles
  );

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global interceptors
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  // Enable CORS
  app.enableCors();

  // Global prefix
  app.setGlobalPrefix('api/v1');

  // Create swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Your API')
    .setDescription('API description')
    .setVersion('1.0')
    .addApiKey({
      type: 'apiKey',
      name: 'X-API-Key', // or whatever your API key header is named
      in: 'header',
    }, 'api-key')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);

  
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap();