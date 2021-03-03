const express = require('express');
const path = require('path');
const app = new express();
const port = 3400;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'index.html'));
}).listen(11000);
app.listen(3000, function() { console.log('listening'); });