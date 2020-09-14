// just do generate on startup
require('./generate');

const { createTerminus } = require('@godaddy/terminus');
const http = require('http');
const express = require('express');

const app = express();
const port = 3000;

if (process.env.ENV === 'development') {
    const livereload = require('livereload');
    console.log('starting livereload server.');
    const lrserver = livereload.createServer({delay: 1000});
    lrserver.watch('out');
}

console.log('starting express server.');
express.static.mime.define({'text/plain': ['md']});
app.use('/', express.static('out'))

const server = http.createServer(app)

createTerminus(server, {
    signal: 'SIGINT'
})

server.listen(port);
