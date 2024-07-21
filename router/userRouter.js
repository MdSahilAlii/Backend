const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from user add');
});

router.get('getall',(req,res)=>{
    res.send('response from update');
});

router.get('/getbyid',(req,res)=>{
    res.send('response form user getbyid')
});

router.get('/update',(req,res)=>{
    res.send('response form update update')
})
router.get('/delete',(req,res)=>{
    res.send('response form user delete')
})
module.exports = router;
