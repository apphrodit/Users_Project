const con = require('../dao/connect')
const Usuarios = require('../models/user')

function formatar(l) {
    const lista = [];
    l.forEach(e => {
        lista.push(new Usuarios(e))
    });
}

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const listar = (req, res) => {
    let usuarios = new Usuarios(req.params)
    con.query(usuarios.read(), (err, result) => {
        if (err == null)
            res.json(formatar(result)).end()
        else
            res.status(500).json('Banco De Dados não Respondeu').end()
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

const login = (req, res) => {
    let usuarios = new Usuarios(req.body)
    con.query(usuarios.login(), (err, result) => {
        if (err == null) {
            if (result.lenght > 0)
                res.status(202).json(formatar(result)).end()
            else
                res.status(404).json(formatar(result)).end()
        } else
            res.status(500).json('Banco De Dados não Respondeu').end()
    })
}


module.exports = {
    teste,
    listar,
    alterar,
    login
}