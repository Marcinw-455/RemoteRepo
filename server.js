const express = require('express');
const app = new express();
const port = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
}).listen(port);