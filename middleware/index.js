//'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

updateId = function(req,res,next){
    if(! req.body.id){ // se nao estao enviadno o id, update o id padrao que ja temos
        id++;
        req.body.id = id+"";
    }
    next();
};

var lions = [];
var id = 0;

app.param('id',function(req,res,next,id){
    var lion = _.find(lions,{id:id});

    if(lion){
        req.lion = lion;
        next();
    }else{
        res.send();
    }
});

app.get('/lions',function(req,res){
    res.json(lions);
});

app.get('/lions/:id',function(req,res){
    lion = req.lion;
    //var lion = _.find(lions,{id:req.params.id});
    res.json(lion || {});
});

app.post('/lions',updateId,function(req,res){
    var lion = req.body;
    //id++;
    //lion.id = id+"";
    lions.push(lion);
    res.json(lion);
});

app.put('/lions/:id',function(req,res){
    var update = req.body;
    if(update.id){
        delete update.id;
    }

    var lion = _.findIndex(lions,{id:req.params.id});
    if(!lions[lion]){
        res.send();
    }else{
        var updateLion = _.assign(lions[lion],update);
        res.json(updateLion);
    }
});

app.delete('/lions/:id',function(req,res){
    var lion = _.findIndex(lions,{id:req.params.id});
    if(!lions[lion]){
        res.send();
    }else{
        var deletedLion = lions[lion];
        lions.splice(lion,1);
        res.json(deletedLion);
    }
});

app.use(function(err,req,res,next){
    if(err){
        res.status(500).send(err);
    }
});

app.listen(3000,function(){
    console.log('3000 on*');
})