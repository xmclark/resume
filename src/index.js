// just do generate on startup
require('./generate');

const path = require('path');
const express = require('express');
const livereload = require('livereload');

const app = express();
const port = 3000;

console.log('starting livereload server.');
const lrserver = livereload.createServer({delay: 1000});
lrserver.watch('out');

console.log('starting express server.');
express.static.mime.define({'text/plain': ['md']});
app.use('/', express.static('out'))
app.listen(port);
