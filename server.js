var proxy = require('html2canvas-proxy');
var express = require('express');

module.exports = () => {
 var app = express();
 app.use('/', proxy());
 
 return app;
};
