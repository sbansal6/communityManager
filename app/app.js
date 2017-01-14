const async = require('async');
const express = require('express');
const path = require('path');
const expressWinston = require('express-winston');
const winston = require('winston'); // for transports.Console
const app = module.exports = express();
const exphbs = require('express-handlebars');
const dbInit = require('./init/db.init');
const aclInit = require('./init/acl.init');
const routes = require('./routes');

const initApp = function (cb) {
    async.waterfall([
        // mongodb init
        // function(cb){
        //     dbInit(cb)
        // },
        // // acl init
        // function(cb){
        //     aclInit(cb)
        // },
        // app bootstrap
        function(cb){
            // add acl to app
            //app.locals.acl = acl;
            app.set('views', path.join(__dirname, '/../app/views'));
            app.engine('.hbs', exphbs({
                defaultLayout: 'single',
                extname: '.hbs',
                layoutsDir:'app/views/layouts',
                partialsDir:'app/views/partials'
            }));
            app.set('view engine', '.hbs');
            app.use(express.static('public'));
            cb()
        },
        // request logger
        function(cb){
            // initialize request logger
            if (global.mode !== "test"){
                app.use(expressWinston.logger({
                    transports: [
                        new winston.transports.Console({
                            json: true,
                            colorize: true
                        })
                    ],
                    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
                    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
                    expressFormat: false, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
                    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
                    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
                }));
            }
            cb()
        },
        // routes
        function(cb){
            // add routes to app
            require('./routes')(app);
            cb();
        },
        // error logger
        function(cb){
            // initialize error logger
            app.use(expressWinston.errorLogger({
                transports: [
                    new winston.transports.Console({
                        json: true,
                        colorize: true
                    })
                ]
            }));
            cb(null,app);
        }
    ],cb)
}

const startServer = function(){
    "use strict";
    initApp(function(){
        app.listen(3000);
        console.log('listening on port 3000');
    })
}

module.exports = {
    initApp:initApp,
    startServer:startServer
}