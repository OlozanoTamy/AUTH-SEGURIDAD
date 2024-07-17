import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret:"P4l4br453cR3t4", //Por lo generar esta en variables de entorno, no Poner nada sencillo esto se hace .env
            signOptions:{ expiresIn:"40s"}, //En cuanto expira el tiempo
        })
    ],
    //Se importan las estrategia que se deben usar
    providers:[AuthService,LocalStrategy,JwtStrategy],
    exports:[AuthService]
})
//Siempre se debe tener autenticacion de dos factores 
//Nunca por mensajes de texto
//Whatsapp -> siempre cifrado

export class AuthModule {}

//Este modulo se creo con el comando nest g module auth
