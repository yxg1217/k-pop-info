var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var singerSchema = new Schema({
    name: { type: String, required: true },
    alias: { type: String, required: true },
    origin:{ type: String, required: true },
    genres_str:{ type: String, required: true }
    labels: { type: String, required: true },
    //addDate: { type: Date, default: Date.now(), required: true },
    members_str:{ type: String, required: true },
    link:{ type: String, required: true },
    img:{ type: String, required: true },
    size:{ type: Number}

});

var Singer = mongoose.model('Singer', singerSchema);

module.exports = Singer;