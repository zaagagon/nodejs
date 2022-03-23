//prueba de rutas con node js
var http = require('http');
var port = 1000;
var urls = require('url');

http.createServer (function(req,res){

   res.writeHead(200,{'Content-type':'text/html'});
   res.write('<h1>Hola Zag servidor corriendo con Nodemon</h1>');
    res.end("Final de la prueba");
    url=urls.parse(req.url).pathname;
    router(rutas,url, res);//le pasamos 3 objetos

   // console.log(url);
    
}).listen(port,'localhost',function(){
    console.log("servidor corriendo en el puerto : "+ port);
});