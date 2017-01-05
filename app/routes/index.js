"use strict";
module.exports = function (app) {

    app.get('/', function(req, res, next) {
        res.send({
            status:"app is up and running"
        });
        res.end();
    });

    require('./newSignUp')(app);
}