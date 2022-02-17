const UserController = require('../controller/userController.js');

const usersRouter = require('express').Router()

usersRouter.get("/hello", UserController.renderHello)
usersRouter.get("/", UserController.viewAll)

module.exports = usersRouter;