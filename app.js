var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
var app = new express()

app.listen(8090)
app.use(express.static(path.join(__dirname,'./html')))
