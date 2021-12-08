
const express = require('express');
const app = express();
const puerto = 4000; //podemos crear una variable para el puerto
//creamos el servidor 

app.listen(puerto,()=>{
  //ahora concatenemos la variable puerto a nuestro consolelog
   console.log('hola servidor express en puerto'+puerto)});//probemos el servidor
//console.log("servidor express ok");


//archivo index.js
//archivo index.js
/*const express = require('express');
const app = express();

const PUERTO = 3000;

app.listen(PUERTO, function(){
	console.log('Servidor http corriendo en el puerto 80');
});*/