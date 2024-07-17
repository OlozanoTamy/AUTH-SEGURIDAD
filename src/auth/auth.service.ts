import { Injectable } from "@nestjs/common";
import { User } from "src/types/User";
import { JwtService } from "@nestjs/jwt";
import { access } from "fs";

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
    validateUser(username:string, password:string):any{
        console.log("AuthService Validate_User");
        if(this.testUser.name===username && this.testUser.password===password){
            return {
                userId:this.testUser.id,
                name:this.testUser.name,
            };
            //no queremos retornar la passward
        }
    }
    login(user: any) {
        console.log("Login User:", user); // Log del usuario para depuración
        const payload = {
            id: user.userId,
            name: user.name,
        };
        console.log("Payload:", payload); // Log del payload para depuración
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}