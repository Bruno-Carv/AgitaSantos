//Importando express
const express = require('express');
//Configurando como variavel de rotas
const Routes = express.Router();

//Importando Validação 
const ArtistValidation = require('../validator/artistValidation');

//Importando Controller
const ArtistController = require('../app/controllers/ArtistController');


//Rotas

//READ - Ler
Routes.get('/read', ArtistValidation.index, ArtistController.index);

//CREATE - Criar
Routes.post('/create', ArtistController.create);

//UPDATE - atualizar
Routes.put('/update', ArtistValidation.update, ArtistController.update);

//DELETE - destruir
Routes.delete('/destroy', ArtistValidation.destroy, ArtistController.destroy);

//Login
Routes.post('/signIn', ArtistValidation.signin, ArtistController.signIn)

//Exportando arquivo de rotas
module.exports = Routes;