const mongoose = require('../../database');

const EventSchema = new mongoose.Schema({

});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;