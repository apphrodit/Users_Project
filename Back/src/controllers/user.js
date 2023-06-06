const con = require('../dao/connect')
const Usuarios = require('../models/user')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const listar = (req, res) => {
    let usuarios = new Usuarios(req.params)
    con.query(usuarios.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let usuarios = new Usuarios(req.body)
    con.query(usuarios.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    teste,
    listar,
    alterar,

}