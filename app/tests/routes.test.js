"use strict";

const request = require("supertest");
const app = require("../app");
const expect = require("chai").expect;

describe('Routes.Test',function(){
    var appInstance ;

    before(function(done){
        global.mode = "test";
        //console.log('process',process.env)
        app.initApp(function(err,app){
            appInstance = app;
            done();
        })

    })

    describe('/',function(){
        it('simple get to /',function(done){
            request(appInstance)
            .get("/")
                .end(function(err, res){
                    if (err) {
                        throw err
                    }
                    expect(res.body.status).to.equal('app is up and running')
                    done();
                });

        })
    })

})