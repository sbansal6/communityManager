"use strict";
module.exports = function (app) {

    app.get('/home', function(req, res, next) {
        res.render('home');
    });

    require('./newSignUp')(app);
}