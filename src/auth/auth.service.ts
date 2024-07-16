import { Injectable } from "@nestjs/common";
import { User } from "src/types/User";
@Injectable()
export class AuthService{
    //Se instancia el objeto con interface o con type
    testUser:User;

    constructor(){
        this.testUser ={
            id:1,
            name:"Oscar",
            password:"test",
        }
    }
//No se quiere tener el password en texto plano
    validateUser(usermane:string, password:string):any{
        console.log("AuthService Validate_User");
        if(this.testUser.name===usermane && this.testUser.password===password){
            return {
                userId:this.testUser.id,
                name:this.testUser.name,
            }
            //no queremos retornar la passward
        }
    }
}