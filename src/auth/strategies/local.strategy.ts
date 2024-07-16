import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
//Importa la funcion AuthService que se construye con
//como service
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({usernameField:"username"});
    }
    validate(username:string,passport:string):any{
        console.log("Local-Strategy__Validate")
        const user = this.authService.validateUser(username,passport);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}