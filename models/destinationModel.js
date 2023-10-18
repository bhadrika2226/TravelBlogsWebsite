const mongoose = require('mongoose');
const destinationSchema = new mongoose.Schema({
    // destinationId: {
    //     type: Number,
    //     unique: true
    // },
    dState: {
        type: String,
        required: true
    },
    dCity: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        
    },
    details: {
        type: String,
        required: true
    },
    dImage: {
        type: String,
        required: true
    },
});
const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;