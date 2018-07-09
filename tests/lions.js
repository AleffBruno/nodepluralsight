var express = require('express');

lionsRouter = express.Router();

var lions = [];
var id = 0;

updateId = function(req,res,next){
    if(!req.body.id){
        id++;
        req.body.id = id+"";
    }
    next();
};

lionsRouter.get('/',function(req,res){
    res.json(lions);
});

lionsRouter.post('/',updateId,function(req,res){
    var lion = req.body;
    lions.push(lion);
    res.json(lion);
});

lionsRouter.put('/:id',function(req,res){ 
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

lionsRouter.delete('/:id',function(req,res){
    var lion = _.findIndex(lions,{id:req.params.id});
    if(!lions[lion]){
        res.send();
    }else{
        var deletedLion = lions[lion];
        lions.splice(lion,1);
        res.json(deletedLion);
    }
});


module.exports = lionsRouter;