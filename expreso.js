const express = require('express')
const app = express()
const port = 30003

app.get('/', (req, res) => {
   // res.write('<h1>Express funcionando</h1>');
  res.send('<h1 style= color: blue>Hello zag!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})