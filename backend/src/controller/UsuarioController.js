const connection = require("../database/connection");
const passwordUtil = require("../utils/passwordUtil");
const table = "usuario";

module.exports = {
    async criar(req, res) {
        const { nome, email } = req.body;
        const password = passwordUtil.getHash(req.body.password);

        try {
            await connection(table).insert({
                nome, email, password
            });
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }

        return res.sendStatus(201);
    }
}