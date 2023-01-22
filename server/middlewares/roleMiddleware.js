const ApiError = require("../error/ApiError.js");
const tokenService = require("../services/TokenService.js");
const {User} = require("../models/models.js");

module.exports = function(roles) {
    return function(req, res, next) {

        if(req.method === "OPTIONS") {
            next();
        }
    
        try {
            const {roles: userRoles} = req.user;

            let hasRole = false;
            
            userRoles.forEach(role => {
                if(roles.includes(role)) {
                    hasRole = true;
                }
            });

            if(!hasRole) {
                next(ApiError.forbidden("У вас нет доступа!"));
            };
    
            next();
    
        } catch(e) {
            console.log(e);
            next(e)
        }
    } 
};