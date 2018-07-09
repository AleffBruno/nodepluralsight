var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
//morgan not required by meself

var lionsRouter = require('./lions.js');
var tigersRouter = require('./tigers.js');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/lions',lionsRouter);
app.use('/tigers',tigersRouter);



app.use(function(err,req,res,next){
    if(err){
        console.log(err.message);
        res.status(500).send(err);
    }
});

module.exports = app;