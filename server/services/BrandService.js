const {Brand} = require("../models/models.js");

class BrandService {
    async create(name) {
        try {
            const brandData = await Brand.create({name});

            return brandData;

        } catch(e) {
            console.log(e);
            throw e;
        }    
    };

    async getAll() {
        try {
            const brandsData = await Brand.findAll();
            return brandsData;

        } catch(e) {
            console.log(e);
            throw e;
        }
    };

    async deleteOne(name) {
        try {
            const brandData = await Brand.destroy({where: {name: name}});
            return brandData;

        } catch(e) {
            console.log(e);
            throw e;
        }
    };
};

module.exports = new BrandService();