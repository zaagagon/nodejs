var http = require('http');
var port = 3000;

http.createServer (function(req,res){

    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola Zag</h1>');
    res.end();
}).listen(port);//podemos crear un mensaje de conexion exitosa 
//usemos console log
//en el caso de error por puerto ocupado
//usemos el comando kill
/* 
$ lsof -i tcp:3000
$ kill -9 PID */
console.log("Servidor corriendo en el puerto"+port);