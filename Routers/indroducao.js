var express = require('express');
var app = express();

var todosRouter = express.Router();

todosRouter.get('/',function(req,res){
    //res.json(todos);
    res.send("home page");
});

app.use('/todos',todosRouter);





app.listen(3000,function(){
    console.log("l on 3k*");
});