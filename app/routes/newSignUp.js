"use strict";

module.exports = function(app) {

    /**
     * Handle new sign up
     * 1) Create new User
     * 2) Create new community and assign user to createdBy attribute
     */
    app.get("/newsignup",function(req,res){
        res.write('newsignup is up and running');
        res.end();
    })

}