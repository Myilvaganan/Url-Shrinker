const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    originalUrl: String,
    shrinkerUrl: String,
    date: {
        type: String,
        default: Date.now()
    }
    
})

module.exports = mongoose.model('Url', urlSchema);