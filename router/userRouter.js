const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from user add');
});

router.get('getall',(req,res)=>{
    res.send('response from user update');
});

router.get('/getbyid',(req,res)=>{
    res.send('response from user getbyid')
});

router.get('/update',(req,res)=>{
    res.send('response from user update')
})
router.get('/delete',(req,res)=>{
    res.send('response from user delete')
})
module.exports = router;
// COMMANDS
//npm init -y
// npm install express
// npm install dev script 
// add dev script 
