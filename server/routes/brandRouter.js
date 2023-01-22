const {Router} = require("express");
const brandRouter = new Router();
const brandController = require("../controllers/BrandController.js")

brandRouter.get("/", brandController.getAll);
brandRouter.post("/", brandController.create);
brandRouter.delete("/", brandController.deleteOne);


module.exports = brandRouter;
