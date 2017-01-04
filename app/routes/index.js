

module.exports = function(app, isLoggedIn) {
    "use strict";

    /**
     * Handle new sign up
     * 1) Create new User
     * 2) Create new community and assign user to createdBy attribute
     */
    app.post("/newsignup",isLoggedIn,function(){
        
    })

}