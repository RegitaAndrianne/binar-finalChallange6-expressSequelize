const historiesRouter = require('express').Router()

historiesRouter.get("/", (req, res) => {
    res.send('ini dari history router')
})


module.exports = historiesRouter;