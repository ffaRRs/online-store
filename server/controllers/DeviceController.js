const {Device, DeviceInfo} = require("../models/models.js");
const ApiError = require("../error/ApiError.js");
const deviceService = require("../services/DeviceService.js")

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {image} = req.files;

            const deviceData = await deviceService.create(name, price, brandId, typeId, info, image);

            return res.json(deviceData);
            
        } catch(e) {
            return next(ApiError.badRequest(e.message));
        }
    };

    async getAll(req, res, next) {
        try {
            let {brandId, typeId, page, limit} = req.query;   
            const devicesData = await deviceService.getAll(brandId, typeId, page, limit);
            
            return res.json(devicesData);

        } catch(e) {
            return next(e)
        }
    };

    async getOne(id) {
        try {
            const deviceData = await Device.findOne({
                where: {id},
                include: [{model: DeviceInfo, as: "info"}]
            });
    
            return res.json(deviceData);

        } catch(e) {
            return next(e);
        }
    };
};

module.exports = new DeviceController();