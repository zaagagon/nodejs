//revisar sintaxis y logica

const http = require('http');
var port=9001; //creamos variable puerto

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    //podemos usar writeHead
     response.writeHead(200,{'Content-type':'text/html'});
      response.write('<h1>Error al cargar la pagina</h1>');
      response.end();
   // response.end();
  }
}).listen(port);
console.log("corriendo y vivito");