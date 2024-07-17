//A basic controller with a single route.
//Controllers are responsible for handling incoming requests and returning responses to the client.

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//Decorador
@Controller()
//Se instanacia y exporta la clase
export class AppController {
  //recibe por paramtros el appservice
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
//LAs clases deben empezar con mayusculas para diferenciarlas -> PascalCase
class AppController2{}