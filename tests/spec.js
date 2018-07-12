var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[LIONS]',function(){

    it('should get all errors',function(done){
        request(app)
        .get('/lions')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200)
        .end(function(err,resp){
            expect(resp.body).to.be.an('array');
            done();
        });
    });

    it('should create a lion',function(done){
        request(app)
        .post('/lions')
        .send({name:'simba'})
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(201)
        .end(function(err,resp){
            expect(resp.body).to.be.an('object');
            done();
        });
    });

    it('should delete a lion',function(done){
        request(app)
        .post('/lions')
        .send({name:'mufasa'})
        .set('Accept','application/json')
        .end(function(err,resp){
            var lion = resp.body;
            request(app)
            .delete('/lions/'+lion.id)
            .end(function(err,resp){
                expect(resp.body).to.eql(lion);
                done();
            });
        });
    });


});




