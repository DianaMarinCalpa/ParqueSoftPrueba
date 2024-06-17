import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Esto permite todos los orígenes, ajusta según tu configuración
  await app.listen(3000);
}
bootstrap();
