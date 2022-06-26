const express = require('express');
const router = express.Router();
const { postData,updateData,getData } = require('../controller/voteController');

router.post("/",postData)
router.put("/:name",updateData)
router.get('/',getData)

module.exports = {voteRouter:router};

