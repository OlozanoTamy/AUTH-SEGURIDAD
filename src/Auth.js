//Basic Auth
//la autenticacion mas basica de todas. Un mismo usuario y contraseña
//Para todo enviado por un headre HTPP, codificado en base64 -> para no enviar la informacion plana
//Generalmente no se usa -> Solo para cosas internas -> por lo general no se usa nunca

//Bearer token
//Se genera y codifica un token con una duracion especifica el cual se envia
//en las HTTP requests para que el servidor determine cual es el usuario y si
//es valido
//Quien posea el token posee acceso a la informacion
//Se limita lo que se hace con el token y se debe hacer un
//nuevo login para cambiar la informacion
//El token lo genera el servidor
//No es necesario guardar en token en la base de datos, se guardan en memoria

//OAuth
//Permite a las aplicaciones obtener acceso limitado a cuentas de usuario en un
//Servicio HTTP como por ejemplo Twitter o GitHub.
//Se utiliza para otorgar permisos a una aplicacion para
//actuar en nombre de un usuario.


//Api KEy
//Se crea una clave de acceso para un usuario en particular y se le solicita que la envie en cada HTTP request
//Con eso se determina quien nos esta llamando y que informacion o no podemos brindarle
//Servicio Bussines to Bussines -> Se da una llave que se envia en cada peticion para poder
//Acceder a info
//La ApiKEy -> Se podria guardar en Mongo en el lado del server


//Estos son los principales metodos de Auth y seguridad


//Bearer Token -> Que necesitamos

//Passport es un middleware de autenticacion para NodeJs

//Capacidad de aplicar estrategias -> Automatizacion
//Extremadamente flexible
//Buena integracion con frameworks -> Espress y NestJS

//Estrategias
//Formas de autenticar a nuestros usuarios -> Por Ejemplo
//Twitter
//Google
//GitHub

//JWT (JSON WebToken)
//Un estandar para compartir informacion de forma compacta y autonoma entre dos partes de forma segura
//Esta informacion puede ser verificada y confiable por que esta firmada digitalmente
