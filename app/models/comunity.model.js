const mongoose = require('mongoose');

const communitySchema = mongoose.Schema({
    name: String,
    websiteAddress: String,
    physicalAddress:String,
    createDate: { type: Date, default: Date.now },
    createdBy : String // ref user
});

module.exports = mongoose.model('Community', communitySchema);


