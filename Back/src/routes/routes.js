const express = require("express");
const router = express.Router();

const Usuarios = require ('../controllers/user');

router.get('/', Usuarios.teste);
router.get('/usuarios/listar', Usuarios.listar);
router.get('/usuarios/listar/:id', Usuarios.listar);
router.put('/usuarios/alterar/:id', Usuarios.alterar);
router.post('/usuarios/login', Usuarios.login)
module.exports = router;