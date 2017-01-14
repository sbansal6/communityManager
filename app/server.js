const app = require('./app');

app.startServer(function(err){
    if (err){
        console.log('err',err);
    }
    "use strict";
    console.log('started server')
})