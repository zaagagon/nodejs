//elementos del servidor
//puerto objeto http
//se crea el servidor con el modulo createServer
//usamos la funcion que recibe solicitudes y respuestas
//una vez creado el servidor se ejecuta


var http = require('http');

http.createServer(function(req,res){
    //si deseamos mostrar algo en el navegador podemos usar
    //un mensaje
    res.writeHead(200,{'Content-type':'text/hmtl'});
    res.write('<h1>Hola Zag servidor corriendo con Nodemon</h1>');
    res.write('<h1>hola</h1>');
    res.end();

}).listen(10006);;

console.log("servidor corriendo");

//objeto http para llamar el modulo createServer

// Estructura de mi servidor http.createServer(function(){});
//funcion callback