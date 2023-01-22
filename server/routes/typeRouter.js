const {Router} = require("express");
const typeRouter = new Router();
const typeController = require("../controllers/TypeController.js")

typeRouter.get("/", typeController.getAll);
typeRouter.post("/", typeController.create);
typeRouter.delete("/", typeController.deleteOne);


module.exports = typeRouter;
