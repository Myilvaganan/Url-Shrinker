const express = require('express');
const router = express.Router();

const Url = require('../models/url');

router.get('/:code', async (req, res) =>{
        try {
            const url = await Url.findOne({urlCode: req.params.code});
          
            if(url){
                return res.json(url.originalUrl)
            }else{
                return res.status(404).json('No Url Found')
            }


        } catch (error) {
            console.error(error);

            res.status(500).json('Server Error');
        }
})




module.exports = router;