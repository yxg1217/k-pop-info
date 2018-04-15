var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Singer = require('../models/singer');

//     hostname:port/singer/
router.post('/',createSinger, sendBack);
router.get('/', getSingers);


function sendBack(req, res,next){
    res.json(req.toSend);
}

function createSinger(req, res, next){
    var singer = new Singer(req.body);
    singer.save(function (err){
        if(err) {
            return next(err);
        }else{
            next();
        }
    });
}

function getSingers(req,res,next){
    Singer.find({})
        .exec(function returnSingers(err, singers) {
            if (err) return next(err);
            res.json(singers);
        });
}

module.exports = router;
