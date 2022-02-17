const { User } = require("../models")

class UserController {
    static renderHello = (req, res) => {
        res.send('halloooo')
    }

    static viewAll(req, res) {
        User.findAll({
            order:[["id", 'ASC']]
        })
        .then((data) => {
            res.render("users", { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

module.exports = UserController;