
// server.js
'use strict';
const http = require('http');

const servidor = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'})

});