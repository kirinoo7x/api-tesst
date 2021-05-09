const logger = (req, res, next) =>{
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    next()
}

module.exports =  logger