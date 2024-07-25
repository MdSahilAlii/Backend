const express = require('express');
const Model = require('../models/productModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body)

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update', (req, res) => {
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getbyid', (req, res) => {
    res.send('response from product getbyid');
});


// Why we write this??
module.exports = router;