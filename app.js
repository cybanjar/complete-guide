const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes.handler);
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('middleare');
})

server.listen(3000);
