const biodataRouter = require('express').Router()

biodataRouter.get("/", (req, res) => {
    res.send('ini dari biodata router')
})


module.exports = biodataRouter;