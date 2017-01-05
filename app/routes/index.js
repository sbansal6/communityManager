"use strict";
module.exports = function (app) {

    app.get('/', function(req, res, next) {
        res.write('App is up and running');
        res.end();
    });

    require('./newSignUp')(app);
}