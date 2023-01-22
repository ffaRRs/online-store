const ApiError = require('../error/ApiError.js');

module.exports = function(err, req, res, next) {
    if(err instanceof ApiError) {
        return res.status(err.status).json({messsage: err.message, errors: err.errors})
    };

    return res.status(500).json({message: "Непридвиденная ошибка"})
}