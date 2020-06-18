const mongoose = require('../../database');

const CommunitySchema = new mongoose.Schema({

});

const Community = mongoose.model('Community', CommunitySchema);

module.exports = Community;