'use strict';

let Acl = require('acl');
const async = require('async');
const mongodb  = require('mongodb');
const config = require('../../config/default');
const connection = "mongodb://" + config.mongo.host + ":" + config.mongo.port + "/" + config.mongo.database;


module.exports = function(cb){
    mongodb.connect(connection,function(err,db){
        if (err) {
            cb(err)
        } else {
            const useSingle = true;
            const backend = new Acl.mongodbBackend(db, 'acl_', useSingle);
            const acl = new Acl(backend);
            async.waterfall([],function (err) {
                if (err) {
                    cb(err);
                } else {
                    // Roles Created by system
                    acl.allow('communityAdmin', ['/'], '*');
                    acl.allow('communityUser', ['/'], ['view', 'edit']);
                    acl.allow('internalAdmin', ['/'], '*');
                    acl.allow('internalUser', ['/'], ['view', 'edit']);
                    cb(null,acl)
                }
            })
        }
    })
}

