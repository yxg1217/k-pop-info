var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var musicSchema = new Schema({
    name: { type: String, required: true },
    singer: { type: String, required: true },
    yearPublic: { type: Date, required: true },
    addDate: { type: Date, default: Date.now(), required: true },
});

var Music = mongoose.model('Music', musicSchema);

module.exports = Music;