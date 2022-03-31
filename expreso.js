const express = require('express')
const app = express()
const port = 30004

app.get('/', (req, res) => {
   // res.write('<h1>Express funcionando</h1>');
   res.writeHead(200,{'Content-type':'text/html'});//para que funcione necesita
    res.write('<h1>Pagina principal ADMIN</h1>');
  res.send('<h1 style= "color: blue">Hello zag!</h1>')//color tag //
})

app.get('/nosotros', (req, res) => {
  // res.write('<h1>Express funcionando</h1>');
  res.writeHead(200,{'Content-type':'text/html'});//para que funcione necesita
   res.write('<h1>Pagina principal acerca de nosotros</h1>');
 res.send('<h1 style= "color: blue">Hello zag!</h1>')//color tag //
})

app.get('/principal', (req, res) => {
  // res.write('<h1>Express funcionando</h1>');
  res.writeHead(200,{'Content-type':'text/html'});//para que funcione necesita
   res.write('<h1>Pagina principal index html</h1>');
 res.send('<h1 style= "color: blue">Hello zag!</h1>')//color tag //
})/

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})