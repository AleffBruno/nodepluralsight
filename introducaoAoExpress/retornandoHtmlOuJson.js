var express = require('express');
var app = express();
var fs = require('fs');

var jsonData = {count:12,message:'hey'};

app.get('/',function(req,res){
    fs.readFile(__dirname+"/public/index.html",function(err,buffer){
        res.setHeader('Content-Type','application/json');
        res.send(buffer.toString());
    });

    // res.sendFile(__dirname + '/public/index.html',function(err){
    //     if(err){
    //         res.status(500).send(err);
    //     }
    // });
});

app.get('/data',function(req,res){
    res.json(jsonData);
    res.end();
})

app.listen(3000,function(){
    console.log('running port 3000');
});