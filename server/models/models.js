const sequelize = require("../db.js");
const {DataTypes} = require("sequelize");

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    roles: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
    activationLink: {type: DataTypes.STRING}
});

const Role = sequelize.define("role", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, defaultValue: "USER", unique: true, allowNull: false},
})

const Token = sequelize.define("token", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING(500), allowNull: false},
});

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketDevice = sequelize.define("basket_device", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Device = sequelize.define("device", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    image: {type: DataTypes.STRING, allowNull: false},
});

const Type = sequelize.define("type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define("brand", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Rating = sequelize.define("rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
});

const DeviceInfo = sequelize.define("device_info", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},

});

const TypeBrand = sequelize.define("type_brand", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},    
});


User.hasMany(Role, {as: "user"});
Role.belongsTo(User);

User.hasOne(Token);
Token.belongsTo(User);

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, {as: "info"});
DeviceInfo.belongsTo(Device);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});


module.exports = {
    User, Role, Token, Basket, BasketDevice, Device, DeviceInfo, Type, Brand, TypeBrand
}