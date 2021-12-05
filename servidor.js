//prueba de rutas con node js
var http = require('http');
var port = 7000;
var urls = require('url');

http.createServer (function(req,res){

   res.writeHead(200,{'Content-type':'text/html'});
   res.write('<h1>Hola Zag servidor corriendo con Nodemon</h1>');
    res.end("Final de la prueba");
    url=urls.parse(req.url).pathname;
    console.log(url);
    
}).listen(port,'localhost',function(){
    console.log("servidor corriendo en el puerto : "+ port);
});//podemos crear un mensaje de conexion exitosa 
//usemos console log
//en el caso de error por puerto ocupado
//usemos el comando kill
/* 
$ lsof -i tcp:3000
$ kill -9 PID */
//console.log("Servidor corriendo en el puerto"+port);
//console.log("hola de nuevo");

//Creacion de rutas

var rutas= {}; //rutas
rutas['/']=root; //es necesario crear la funcion root

function root(res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Pagina principal ADMIN</h1>');
    res.end("Pagina cargada");

}