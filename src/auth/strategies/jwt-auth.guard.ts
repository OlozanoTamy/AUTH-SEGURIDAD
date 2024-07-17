import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt"){}
//Es para decirle a nuestro decorator que tipo de estrategia vamos a usar
//Se puenden crear mas Guard
