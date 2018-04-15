var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Music = require('../models/music');

//     hostname:port/music/
router.post('/',createMusic, sendBack);
router.get('/', getMusics);


function sendBack(req, res,next){
    res.json(req.toSend);
}

function createMusic(req, res, next){
    var music = new Music(req.body);
    music.save(function (err){
        if(err) {
            return next(err);
        }else{
            next();
        }
    });
}

function getMusics(req,res,next){
    Music.find({})
        .exec(function returnMusics(err, musics) {
            if (err) return next(err);
            res.json(musics);
        });
}

module.exports = router;
