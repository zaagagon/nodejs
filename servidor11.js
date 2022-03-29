
// server.js
'use strict';
const http = require('http');
const { resourceLimits } = require('worker_threads');

const servidor = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});//text/plain
    //podemos usar res.write para escribir codigo html
    res.write('<h1>Titulo del servidor : Amadeus</h1>');
    res.write('<h2 style= color:red>**Servidor Olimpo **</h2>');//color atributo
    res.write('<p>Servidor creado en express con node js</p>');
    res.write('<h3><n3/>');
    res.end("Hola ADSI servidor ok");//solo se puede llamar una vez

});servidor.listen(9000);//puerto 9000


var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

module.exports = router;