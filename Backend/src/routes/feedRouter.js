//Importando express
const express = require('express');
//Configurando como variavel de rotas
const Routes = express.Router();

//File
const multer = require('multer');
//Importando Controller
const FeedControllers = require('../app/controllers/FeedControllers');

const m = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 20 * 1024 * 1024 // no larger than 20mb
    }
});

//Rotas

//READ - Ler
Routes.get('/read', FeedControllers.index);

//READ - Ler de user
Routes.get('/read/user', FeedControllers.index);

//CREATE - Criar
Routes.post('/create', FeedControllers.create);

//CREATE - upload
Routes.post("/upload", m.single("file"), FeedControllers.upload);

//UPDATE - atualizar
Routes.put('/update', FeedControllers.update);

//DELETE - destruir
Routes.delete('/destroy', FeedControllers.destroy);

//Exportando arquivo de rotas
module.exports = Routes;