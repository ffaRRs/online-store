const bcrypt = require("bcrypt");
const uuid = require("uuid");

const UserDto = require("../Dtos/UserDto.js")
const ApiError = require("../error/ApiError.js");
const tokenService = require("../services/TokenService.js");
const mailService = require("../services/MailService.js");
const userService = require("../services/UserService.js")
const {User, Basket, Role} = require("../models/models.js")

class UserService {
    async registration(email, password) {
        try {
            
            const candidate = await User.findOne({where: {email}});

            if(candidate) {
                throw ApiError.badRequest(`Пользователь с почтовым адресом ${email} уже существует!`);
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const activationLink = uuid.v4();

            const user = await User.create({email, password: hashPassword, activationLink, roles: ["GUEST"]});
            const basket = await Basket.create(({userId: user.id}));

            await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

            const userDto = new UserDto(user); // id, email, isActivated, roles, isActivated
           
            const tokens = tokenService.generateTokens({...userDto});
            const savedTokens = await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens, user: userDto};

        } catch(e) {
            console.log(e.message);
            throw e;
        }
    };

    async activate(activationLink) {
        try {
            const user = await User.findOne({where: {activationLink}});

            if(!user) {
                throw ApiError.badRequest(`Некорректная ссылка активации!`);
            }
    
            const userRole = await Role.create({value: "USER", userId: user.id});

            return await user.update({isActivated: true, roles: user.roles.concat("USER")});

        } catch(e) {
            console.log(e);
            throw e;
        }
    };
    
    async login(email, password) {
        try {
            const user = await User.findOne({where: {email}});

            if(!user) {
                throw ApiError.badRequest("Пользователь с таким email не найден!");
            }

            const isPassEquals = await bcrypt.compare(password, user.password);

            if(!isPassEquals) {
                throw ApiError.badRequest("Некорректный пароль");
            }

            const userDto = new UserDto(user);
            
            const tokens = tokenService.generateTokens({...userDto});
            const savedTokens = await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens, user: userDto};

        } catch(e) {
            console.log(e);
            throw e
        }
    };

    async logout(refreshToken) {
        try {
            const token = await tokenService.removeToken(refreshToken);
            return token;

        } catch(e) {
            console.log(e.message);
            throw e;
        }
    };

    async refresh(refreshToken) {
        try {
            if(!refreshToken) {
                throw ApiError.unAuthorizedError();
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDB= await tokenService.findToken(refreshToken);

            if(!userData || !tokenFromDB) {
                throw ApiError.unAuthorizedError();
            }

            const user = await User.findOne({where: {id: userData.id}})
            const userDto = new UserDto(user);
            
            const tokens = tokenService.generateTokens({...userDto});
            const savedTokens = await tokenService.saveToken(userDto.id, tokens.refreshToken);
            return {...tokens, user: userDto}; 
            
        } catch(e) {
            throw e;
        }
    };

    async getUsers() {
        try {
            const users = await User.findAll();
            return users;

        } catch(e) {
            console.log(e.message);
            throw e;
        }
    };
};

module.exports = new UserService();