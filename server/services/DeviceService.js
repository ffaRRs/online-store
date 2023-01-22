const uuid = require("uuid");
const path = require("path");
const mv = require("mv")
const {Device, DeviceInfo} = require("../models/models.js");

class DeviceService {
    async create(name, price, brandId, typeId, info, image) {
        try {
            const fileName = uuid.v4() + ".jpg";

            const deviceData = await Device.create({name, price, brandId, typeId, image: fileName});

            image.mv(path.resolve(__dirname, "..", "static", fileName));

            if(info) {
                info = JSON.parse(info);
                info.forEach(elem => {
                    DeviceInfo.create({
                        title: elem.title,
                        description: elem.description,
                        deviceId: deviceData.id
                    })
                })
            }

            return deviceData;
            
        } catch(e) {
            console.log(e.message);
            throw e;
        }
    };

    async getAll(brandId, typeId, page, limit) {
        try {
            page = page || 1;
            limit = limit || 9;

            const offset = page * limit - limit;
    
            let devices;
    
            if(!brandId && !typeId) {
                devices = await Device.findAndCountAll({limit, offset});
            }
            if(brandId && !typeId) {
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
            }
            if(!brandId && typeId) {
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
    
            }
            if(brandId && typeId) {
                devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
            }
            
            return devices;

        } catch(e) {
            console.log(e.message);
            throw e;
        }  
    };

    async getOne(id) {
        try {
            const deviceData = await Device.findOne({where: {id}, include: [{model: DeviceInfo, as: "info"}]});
            return deviceData;

        } catch(e) {
            console.log(e.message);
            throw e;
        }
    };
};

module.exports = new DeviceService();