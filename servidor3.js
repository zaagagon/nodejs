//creacion servidor http sin rutas
//datos necesarios
//variable http u objeto
//puerto del servidor
//si vamos a usar rutas url

var http = require('http');

http.createServer(function(req,res){
    //creamos la función 

      res.writeHead(200,{'Content-type':'text/html'});
      res.write('<h1>Hola Zag servidor arriba sin rutas</h1>');
      res.end();
}).listen(10001);
console.log("Servidor corriendo y simple")