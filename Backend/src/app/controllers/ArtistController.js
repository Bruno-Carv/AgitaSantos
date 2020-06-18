const bcrypt = require('bcryptjs');

const Artist = require('../models/Artist');

const {genareteTokey} = require('../secure/token');
/**
 * Estrutura de CRUD do model Artista 
 */
module.exports = {
    
    async signIn(request, response){
        const {email, password} = request.body;
        try{
            //Selecionar dados + password
            const artist = await Artist.findOne({email}).select('+password');

            //Verificar se existe usuário
            if(!artist)
                return response.status(400).json({error: 'User not found'});

            //Validando senha
            if(!await bcrypt.compare(password, artist.password))
                return response.status(400).json({error: 'Invalid password'});

            //Removendo senha do retorno
            artist.password = undefined;
            
            //Retornando dados do usuários
            return response.header({tokey: genareteTokey({ id: Artist.id })}).json({artist});

        }catch{
            return response.status(400).json({error: 'SignIn failed'});
        }
    },

    async index(request, response){
        
    },

    async create(request, response){
        const {email} = request.body;//Coletando dados de cadastro
        try{

            //Verificando se já está cadastrado
            if(await Artist.findOne({email})){
                return response.status(400).json({error: 'Artist already exists'});
            }

            //Criando usuário no banco de dados
            const artist = await Artist.create(request.body);

            //Removendo campo de senha de retorno
            artist.password = undefined;

            //Removendo campo de validação de endereço do retorno
            artist.adress.receipt = undefined;

            
            //Retornando dados cadastrado
            return response.header({tokey: genareteTokey({ id: artist.id })}).json({artist});

        }catch(err){
            console.log(err);
            //Retorne erro ao tentar cadastrar
            return response.status(400).json({error: 'Registration failed'});
        }
    },

    async update(request, response){

    },

    async destroy(request, response){

    }
}