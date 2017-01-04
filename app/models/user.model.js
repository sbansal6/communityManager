const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    community: { type: String, default: "" },
    role: {type: String, default: "communityUser"},
    createDate: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now },
    resetPasswordToken: String
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
userSchema.methods.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);