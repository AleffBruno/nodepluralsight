var app = require('./server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[LIONS]',function(){

    it('should get all errors',function(){
        request(app)
        .get('/lions')
        .set('Accept','application/json')
        .expect('Content-Type','application/json')
        .expect(200)
        .end(function(err,resp){
            chai(resp.body).to.be.an('array');
            done();
        })
    });
});


describe('[LIONS post]',function(){
    it('should post a lion /POST',function(){
        request(app)
        .post('/lions')
        .send({name:'simba'})
        .set('Accept','application/json')
        .expect('Content-Type','application/json')
        .expect(200)
        .end(function(err,resp){
            if(err){
                done("ERRO AQUI"+err);
            }
            chai(resp.body).to.be.an('json');
            done();
        })
    });
});



            


