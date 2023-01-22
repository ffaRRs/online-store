const jwt = require("jsonwebtoken");
const {Token} = require("../models/models.js");
const bcrypt = require("bcrypt");

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "10m"});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"});
        
        return {accessToken, refreshToken};
    };

    async saveToken(userId, refreshToken) {
        try {
            const tokenData = await Token.findOne({where: {userId}});
    
            if(tokenData) {
               return await tokenData.update({refreshToken});
            }
            const token = await Token.create({refreshToken, userId});
            return token;

        } catch(e) {
            throw e;
        }
    };

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;

        } catch(e) {
            return null;
        }
    };

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;

        } catch(e) {
            return null;
        }
    }

    async removeToken(refreshToken) {
        try {
            const tokenData = await Token.destroy({where: {refreshToken}});
            return tokenData;

        } catch(e) {
            throw e;
        }
    }

    async findToken(refreshToken) {
        try {
            const tokenData = await Token.findOne({where: {refreshToken}});
            return tokenData;

        } catch(e) {
            throw e;
        }
    }
}

module.exports = new TokenService();