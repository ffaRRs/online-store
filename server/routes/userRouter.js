const {Router} = require("express");
const userController = require("../controllers/UserController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const roleMiddleware = require("../middlewares/roleMiddleware.js");
const {body} = require("express-validator");

const userRouter = new Router();

userRouter.post("/registration", body("email").isEmail(), body("password").isLength({min: 3, max: 32}), userController.registration);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/activate/:link", userController.activate);
userRouter.get("/refresh", userController.refresh);
userRouter.get("/users", authMiddleware, roleMiddleware(["ADMIN"]), userController.getUsers);



module.exports = userRouter;
