const express = require('express');
const router = express.Router();


const shortid = require('shortid');

const Url = require('../models/url');

router.post('/shorten', async (req, res) => {
	const { originalUrl } = req.body;
	//create url Code
	const urlCode = shortid.generate();
	try {
		let url = await Url.findOne({ originalUrl });

		if (url) {
			res.json(url);
		} else {
			const shrinkerUrl = urlCode;
			url = new Url({
				originalUrl,
				shrinkerUrl,
				urlCode,
				date: new Date()
			});

			await url.save();

			res.json(url);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json('Server error: ' + error);
	}
});

module.exports = router;
