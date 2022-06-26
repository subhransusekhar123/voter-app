const express = require('express');
const router = express.Router();
//file 
const app = express();
var multipart = require('connect-multiparty');
const path = require('path')
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"images") });



//file upload
const {getRoute,postRoute} = require('../controller/controller')

router.get("/",getRoute)

router.post('/',multipartMiddleware,postRoute)

module.exports = router