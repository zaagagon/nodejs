//elementos del servidor
//puerto objeto http
//se crea el servidor con el modulo createServer
//usamos la funcion que recibe solicitudes y respuestas
//una vez creado el servidor se ejecuta


var http = require('http');

http.createServer(function(req,res){
    //si deseamos mostrar algo en el navegador podemos usar
    //un mensaje

   //corregir este servidor

}).listen(10006);;

console.log("servidor corriendo");

//objeto http para llamar el modulo createServer

// Estructura de mi servidor http.createServer(function(){});
//funcion callback