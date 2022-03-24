
// server.js
'use strict';
const http = require('http');

const servidor = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});//text/plain
    //podemos usar res.write para escribir codigo html
    res.write('<h1>Titulo del servidor : Amadeus</h1>');
    res.write('<h2>**Servidor Olimpo **</h2>');
    res.end("Hola zag servidor ok");//solo se puede llamar una vez

});servidor.listen(9000);//puerto 9000