//Importando express
const express = require('express');
//Configurando como variavel de rotas
const Routes = express.Router();

//Rotas
Routes.get('/',(req, res) => {
    res.status(200).json('API Maratona ESAMC');
});



//Exportando arquivo de rotas
module.exports = Routes;