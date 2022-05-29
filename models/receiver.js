// "User" model/schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceiverSchema = new Schema({
    latitude: {
        type: Number,
        required: true,
        unique: false
    },
    longitude: {
        type: Number,
        required: true,
        unique: false
    },
    coverage_radius: {
        type: Number,
        required: true,
    }

   
    
});

module.exports = mongoose.model('Receiver', ReceiverSchema);