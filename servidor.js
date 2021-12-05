//prueba de rutas con node js
var http = require('http');
var port = 7000;
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

//function router
function router(rutas,url,res){ //le vamos a pasar el objeto rutas
   
    if(typeof rutas[url]=== 'function'){ 
        return rutas[url](res);
    }
    else{
        res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Pagina no encontrada</h1>');
    res.end();
    }
}

var rutas= {}; //rutas
//Primera ruta creada
rutas['/admin']=admin; //es necesario crear la funcion admin

function admin(res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Pagina principal ADMIN</h1>');
    res.end();

}