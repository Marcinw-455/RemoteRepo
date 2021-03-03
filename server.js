const express = require('express');
const path = require('path');

const app = new express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
})
app.listen(port);