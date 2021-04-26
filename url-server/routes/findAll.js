
const express = require('express');
const router = express.Router();

const Url = require('../models/url');



router.get('/url', async (req, res) =>{
        try {
            const url = await Url.find({});
            console.log(url)
            if(url){
                return res.json(url)
            }else{
                return res.status(404)
            }


        } catch (error) {
            console.error(error);

            res.status(500).json('Server Error');
        }
})

module.exports = router;