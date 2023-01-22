const {Type} = require("../models/models.js");

class TypeService {
    async create(name) {
        try {
            const type = await Type.create({name});
            return type;

        } catch(e) {
            console.log(e);
            throw e;
        }  
    };

    async getAll() {
        try {
            const types = await Type.findAll();
            return types;

        } catch(e) {
            console.log(e);
            throw e;
        }      
    };

    async deleteOne(name) {
        try {
            const typeData = await Type.destroy({where: {name: name}});
            return typeData;

        } catch(e) {
            console.log(e);
            throw e;
        }  
    };
};

module.exports = new TypeService();