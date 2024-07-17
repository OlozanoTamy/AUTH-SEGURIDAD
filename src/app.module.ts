//The root module of the application.
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  //Es agregado por autimaticamente por el comando
  imports: [AuthModule],
  controllers: [AppController,AuthController],
  providers: [AppService],
})
export class AppModule {}
