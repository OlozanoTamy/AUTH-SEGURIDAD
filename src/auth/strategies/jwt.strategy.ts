import { ExtractJwt,Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { User } from "src/types/User";


@Injectable()
//Se extructura una clase como estrategia
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"P4l4br453cR3t4",
        })
    }
    //El payload es el token decodificado
    validate(payload:User){
        console.log("Payload:", payload);
        return { id:payload.id, username:payload.name };
    }
}


//Se puede hasheando informacion sencible
//Por razones de seguridad no queremos guardar nuestras contraseñas 
//u otra informacion sencible de forma directa en nuestra base de datos.
//Para esto, vamos a aplicar una tecnica que se denomina hashing.
//hash es una sola via
