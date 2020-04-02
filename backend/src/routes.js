const express = require("express");
const routes = express.Router();

const usuarioController = require("../src/controller/UsuarioController");
const usuarioValidator = require("../src/validators/UsuarioValidator");

routes.post("/usuario", usuarioValidator.criacaoAlteracao, usuarioController.criar);

module.exports = routes;