const UserController = require('../controller/userController.js');

const usersRouter = require('express').Router()

usersRouter.get("/hello", UserController.renderHello)
usersRouter.get("/", UserController.viewAll)
usersRouter.get("/add", UserController.getAddForm)
usersRouter.get("/add", UserController.addUser)

usersRouter.get("/:id", UserController.viewById)


module.exports = usersRouter;