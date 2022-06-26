

fileRouter.post('/fileUpload',multipartMiddleware,fileUpload)

module.exports = fileRouter