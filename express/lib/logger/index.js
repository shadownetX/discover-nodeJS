module.exports = logger;
module.exports.version = '1.0.1';

function logger(req, res, next) {
    res.on('finish', function() {
        console.log(req.method, req.url, res.statusCode);
    });
    next();
}
