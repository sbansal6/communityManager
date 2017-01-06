"use strict";
module.exports = function (app) {

    app.get('/home', function(req, res, next) {
        res.render('home');
    });

    app.get('/setup', function(req, res, next) {
        res.render('setup');
    });

    require('./newSignUp')(app);
}