const db = require("./models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//this isn't working yet, it's just for reference for now
module.exports = function (app) {
    app.post("/user/login", (req, res) => {
        let email = req.body.email;
        db.User.findOne({
            where: { email: email }
        }).then((user, err) => {
            if (err) throw err;
            res.send(user);
        });
    });
};