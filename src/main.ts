//The entry file of the application which uses the core function NestFactory to create a Nest application instance.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Se escucha nuestra app
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
