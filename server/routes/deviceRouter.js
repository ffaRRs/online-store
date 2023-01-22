const {Router} = require("express");
const deviceRouter = new Router();
const deviceController = require("../controllers/DeviceController.js")

deviceRouter.get("/", deviceController.getAll);
deviceRouter.get("/:id", deviceController.getOne);
deviceRouter.post("/", deviceController.create);

module.exports = deviceRouter;
