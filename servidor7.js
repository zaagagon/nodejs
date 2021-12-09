/*//
var http = require('http');
var port = 1000;
var urls = require('url');
http.createServer (function(req,res){
   res.writeHead(200,{'Content-type':'text/html'});
   res.write('<h1>Hola Zag servidor corriendo con Nodemon</h1>');
    res.end("Final de la prueba");
    url=urls.parse(req.url).pathname;
    router(rutas,url, res);//le pasamos 3 objetos
}).listen(port,'localhost',function(){
    console.log("servidor corriendo en el puerto : "+ port);
});*/
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>super prueba</h1>');
    res.end();
}).listen(1100);
console.log("Exito total");

//servidor http ok 