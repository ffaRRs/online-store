const ApiError = require("../error/ApiError.js");
const tokenService = require("../services/TokenService.js");

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS") {
        return next();
    }

    try {
        console.log(req.body, "auth");

        const authorizationHeader = req.headers.authorization;
        if(!authorizationHeader) {
            return next(ApiError.unAuthorizedError());
        }

        const accessToken = authorizationHeader.split(" ")[1];
        if(!accessToken) {
            return next(ApiError.unAuthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData) {
            return next(ApiError.unAuthorizedError());
        }
      
        req.user = userData;
        return next();
        
    } catch(e) {
        return next(ApiError.unAuthorizedError())
    }
}