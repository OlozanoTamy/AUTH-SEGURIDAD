import { Controller ,Request,Post,UseGuards, Get } from "@nestjs/common";
import { LocalAuthGuard } from "./strategies/local-auth.guard";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./strategies/jwt-auth.guard";

@Controller()
export class AuthController{
    constructor(private authService:AuthService){}

    //El midleware aqui se pone para que se ejecute si el user esta logueado
    //Si esta loguado toca el midleeware
   
    //Es un decorator
    @UseGuards(LocalAuthGuard)
    //Solicitud HTPP -> Username y password
    @Post("auth/login")
    //LA ruta de login no sirve para nada mas que para generarnos un tokken que nos identifique
    //funcion login
    //Aca se usa la funcion login que se creo en Services
    login(@Request() req){
        //Lo que hace es firmar la informacion secreta con la funcion 
        //login que se declaro con anterioridad
        return this.authService.login(req.user)
        //Lo que da como resultado un tokken
        //El tokken no se puede decodificar sin la palabra secreta
    }

    //Chequea si el token que se envia es correcto
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}


//Se crea el proyecto Nestjs
//Se crea la carpeta con los modulos que vamos a requerir se puede usar un comando
//Se crea una carpeta types para guardad las variables en este caso objetos