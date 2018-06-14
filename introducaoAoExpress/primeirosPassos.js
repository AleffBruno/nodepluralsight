var express = require('express');

var app = express();

var todos = [];

app.get('/todos',function(req,res){
    res.json(todos);
});

app.post('/todos',function(req,res){
    var todo = req.body.todo;

    todos.push(todos);
    res.send(todo);
});

app.get('todos/:id',function(req,res){
    var todo = _.find(todos,{id:req.params.id});
    // You can use _.where It's much easier.
    // https://stackoverflow.com/questions/12744447/underscore-js-find-item-by-id < reference
    res.json(todo);
});

app.listen(3000,function(){
    console.log("ouvindo");
});