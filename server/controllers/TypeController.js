const typeService = require("../services/TypeService.js");
const ApiError = require("../error/ApiError.js");

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const type = await typeService.create(name);
    
            return res.json(type);

        } catch(e) {
            next(e);
        }
    };

    async getAll(req, res, next) {
        try {
            const types = await typeService.getAll();
            
            return res.json(types);

        } catch(e) {
            next(e);
        }
    };

    async deleteOne(req, res, next) {
        try {
            const {name} = req.body;
            const typeData = await typeService.deleteOne(name);
    
            return res.json(typeData);

        } catch(e) {
            next(e)
        }
        
    };
};

module.exports = new TypeController();