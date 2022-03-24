
// server.js
'use strict';
const http = require('http');

const servidor = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hola zag servidor ok");

});servidor.listen(9000);//puerto 9000