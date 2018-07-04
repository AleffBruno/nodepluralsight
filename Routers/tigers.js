var express = require('express');

tigersRouter = express.Router();

var tigers = [];
var id = 0;

updateId = function(req,res,next){
    if(!req.body.id){
        id++;
        req.body.id = id+"";
    }
    next();
};

tigersRouter.route('/')
    .get(function(req,res){
        res.json(tigers);
    })
    .post(updateId,function(req,res){
        var tiger = req.body;
        tigers.push(tiger);
        res.json(tiger);
    });

tigersRouter.route('/:id')
    .delete(function(req,res){
        var tiger = _.findIndex(tigers,{id:req.params.id});
        if(!tigers[tiger]){
            res.send();
        }else{
            var deletedtiger = tigers[tiger];
            tigers.splice(tiger,1);
            res.json(deletedtiger);
        }
    })
    .put(function(req,res){ 
        var update = req.body;
        if(update.id){
            delete update.id;
        }
    
        var tiger = _.findIndex(tigers,{id:req.params.id});
        if(!tigers[tiger]){
            res.send();
        }else{
            var updatetiger = _.assign(tigers[tiger],update);
            res.json(updatetiger);
        }
    });

/* tigersRouter.get('/',function(req,res){
    res.json(tigers);
});

tigersRouter.post('/',updateId,function(req,res){
    var tiger = req.body;
    tigers.push(tiger);
    res.json(tiger);
}); */

/* tigersRouter.put('/:id',function(req,res){ 
    var update = req.body;
    if(update.id){
        delete update.id;
    }

    var tiger = _.findIndex(tigers,{id:req.params.id});
    if(!tigers[tiger]){
        res.send();
    }else{
        var updatetiger = _.assign(tigers[tiger],update);
        res.json(updatetiger);
    }
});

tigersRouter.delete('/:id',function(req,res){
    var tiger = _.findIndex(tigers,{id:req.params.id});
    if(!tigers[tiger]){
        res.send();
    }else{
        var deletedtiger = tigers[tiger];
        tigers.splice(tiger,1);
        res.json(deletedtiger);
    }
}); */


module.exports = tigersRouter;