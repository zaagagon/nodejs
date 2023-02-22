//creacion servidor http sin rutas
//datos necesarios
//variable http u objeto
//puerto del servidor
//si vamos a usar rutas url

var http = require('http');//creamos el objeto http para usar el modulo createServer

http.createServer(function(req,res){//funcion callback
    //creamos la función 

      res.writeHead(200,{'Content-type':'text/html'});
      res.write('<h1>Hola Zag servidor arriba sin rutas</h1>');
      res.end();
}).listen(10001);//listen tienes otros parametros luego veremos
console.log("Servidor corriendo y simple")