const {Brand} = require("../models/models.js");
const brandService = require("../services/BrandService.js");

class BrandController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const brand = await brandService.create(name);

            return res.json(brand);

        } catch(e) {
            next(e);
        }   
    };

    async getAll(req, res, next) {
        try {
            const brands = await brandService.getAll();
            return res.json(brands);

        } catch(e) {
            next(e);
        } 
    };

    async deleteOne(req, res, next) {
        try {
            const {name} = req.body;
            const deletedBrand = await brandService.deleteOne(name);
        
            return res.json(deletedBrand);

        } catch(e) {
            next(e);
        }
    };
};

module.exports = new BrandController();