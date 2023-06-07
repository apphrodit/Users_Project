const express = require("express");
const router = express.Router();

const Usuarios = require ('../controllers/user');

router.get('/', Usuarios.teste);
router.get('/usuarios/listar', Usuarios.listar);
router.put('/usuarios/alterar', Usuarios.alterar);

module.exports = router;