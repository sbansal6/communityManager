const async = require('async');

const init  = function(cb){
    const dbInit = require('./db.init');
    const aclInit = require('./acl.init');
    async.waterfall([
        function(cb){
            dbInit(cb)
        }
        ,
        function (cb) {
            aclInit(cb)
        }
    ],cb)
}

/**
 * Initialize all dependencies
 * @param cb
 */
module.exports =  init;