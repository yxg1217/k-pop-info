var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var singerSchema = new Schema({
    name: { type: String, required: true },
    singer: { type: String, required: true },
    origin:{ type: String, required: true },
    yearActive: { type: Date, required: true },
    //addDate: { type: Date, default: Date.now(), required: true },
    website:{ type: String, required: true },
    members:{ type: String, required: true },
});

var Singer = mongoose.model('Singer', singerSchema);

module.exports = Singer;