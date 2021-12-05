//prueba de rutas con node js
var http = require('http');
var port = 9000;
var urls = require('url');

http.createServer (function(req,res){

  /* res.writeHead(200,{'Content-type':'text/html'});
   res.write('<h1>Hola Zag servidor arriba </h1>');
    res.end();*/
    url=urls.parse(req.url).pathname;
   router(rutas,url, res);//le pasamos 3 objetos
  
   console.log(url);
    
}).listen(port,'localhost',function(){
    console.log("servidor corriendo en el puerto : "+ port);
});

function router(rutas,url,res){ //le vamos a pasar el objeto rutas
   
    if(typeof rutas[url]=== 'function'){ 
        return rutas[url](res);
    }
    else{
        res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Pagina no encontrada revisar...</h1>');
    res.end();
    }
}

var rutas= {}; //rutas
//Primera ruta creada
rutas['/']=root;
rutas['/admin']=admin; //es necesario crear la funcion admin
rutas['/certificaciones']=certificaciones;
rutas['/google']=google;
rutas['/pagina']=pagina;

function root(res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Pagina principal Welcome</h1>');
    res.end();

}

function admin(res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Pagina principal ADMIN</h1>');
    res.end();

}

function certificaciones(res) {
    //window.open('http://www.ejemplo.com.ar/');
    //window.location.href = "https://professor-falken.com";
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<a href="pagina2.html" target="_blank" > <h1>Pagina abierta con rutas </h1></a>');
    res.end();
 
}

function google(res) {
    //window.open('http://www.ejemplo.com.ar/');
    //window.location.href = "https://professor-falken.com";
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<a href="https://www.google.com" target="_blank" > <h1>Pagina abierta con rutas </h1></a>');
    res.end();
 
}

function pagina(res) {
    //window.open('http://www.ejemplo.com.ar/');
    //window.location.href = "https://professor-falken.com";
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<a href="pagina.html">Inicio <strong>Inicio HTML 5</strong></a>');
    res.end();
 
}