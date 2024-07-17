import { Injectable } from "@nestjs/common";
import { User } from "src/types/User";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
    //Se instancia el objeto con interface o con type
    testUser:User;

    constructor(private jwtService : JwtService){
        this.testUser ={
            id:1,
            name:"Oscar",
            password:"test",
        }
    }
//No se quiere tener el password en texto plano
//Ace esta la conexion con mongo
    validateUser(usermane:string, password:string):any{
        console.log("AuthService Validate_User");
        if(this.testUser.name===usermane && this.testUser.password===password){
            return {
                userId:this.testUser.id,
                name:this.testUser.name,
            };
            //no queremos retornar la passward
        }
    }

 login(user:User){
    const payload = {
        username:user.name,
        sub: user.id
        };
        return {
            //Devuelve el token el metodo sign es la llave, payload
            //Firmar el paylod y generar el token
            access_token: this.jwtService.sign(payload)
    }
}
}