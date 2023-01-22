const ApiError = require("../error/ApiError.js");
const bcrypt = require("bcrypt");
const userService = require("../services/UserService.js");
const {validationResult} = require("express-validator");


class UserController {
    async registration(req, res, next) {
       
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return next(ApiError.badRequest("Ошибка при валидации", errors.array()));
        }

        const {email, password} = req.body;
        const userData = await userService.registration(email, password);
        res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

        return res.json(userData);
    };

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            
            return res.redirect(process.env.CLIENT_URL);

        } catch(e) {
            next(e);
        }
    };

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(userData)

        } catch(e) {
            next(e);
        }
    };

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(userData);

        } catch(e) {
            next(e);
        }
    };

    async logout(req, res, next) {

        try {
            console.log(req);
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie("refreshToken");
            
            return res.json(token);

        } catch(e) {
            console.log(e);
            next(e);
        }
    };

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

            return res.json(userData)

        } catch(e) {
            next(e);
        }
    };

    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            res.json(users);
            
        } catch(e) {
            console.log(e);
            next(e);
        }
    };
};

module.exports = new UserController();