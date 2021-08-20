
const http = require('http');
const express = require('express')

const app = express();

const server = http.createServer(app);

server.listen(3000);

console.log('===> Port 3000');
//
// const express = require('express');

// const app = express();

// app.use('/', req, res, next){

// console.log("Middleware 01");

// res.send('Resposta do Middleware 01');

// }

// app.use('/users', req, res, next){

// console.log("Middleware 02");

// res.send('Resposta do Middleware 02');

// }

// app.listen(3000);

