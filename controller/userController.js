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

    static viewById(req, res){
        const id = req.params.id
        User.findByPk(id)
        .then((data) => {
            data = [data]
            res.render("users", { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getAddForm(req, res){
        res.render("users/add")
    }

    static addStudent(req, res){
        let obj = {
            username: req.body.username,
            password: req.body.last_name,
        }

        User.create(newUser)
        .then(() => {
            res.redirect("/users")
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = UserController;