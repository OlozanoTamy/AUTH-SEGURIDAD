import { Controller ,Request,Post,UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./strategies/local-auth.guard";

@Controller("auth")
export class AuthController{
    constructor(){}

    //El midleware aqui se pone para que se ejecute si el user esta logueado
    //Si esta loguado toca el midleeware
    @UseGuards(LocalAuthGuard)
    @Post("login")
    login(@Request() req){
        console.log("controller")
        return req.user;
    }
}