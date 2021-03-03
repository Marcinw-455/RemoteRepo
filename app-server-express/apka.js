const express = require('express');
const app = new express();

app.get('/', function(req, res){
    res.sendFile('/home/marcin/Desktop/Repos/RemoteRepo/app-server-express/index.html');
}).listen(11000);