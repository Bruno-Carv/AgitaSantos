const mongoose = require('../../database');

const bcrypt = require('bcryptjs');

const ArtistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true,
    },
    photo:{
        type: String,
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    adress:{
        cep:{
            type: String,
            required: true
        },
        receipt:{
            type: Boolean,
            default: false,
            select: false,
        },
        street:{
            type: String,
            lowercase: true,
        },
        district:{
            type: String,
            lowercase: true,
        },
        city:{
            type: String,
            lowercase: true,
        },
        state:{
            type: String,
            lowercase: true,
        }
    },
    actingField:{
        type: String,
        lowercase: true,
        required: true
    },
    socialNetwork:[{
        type:{
            type: String,
            lowercase: true, 
        },
        link:{
            type: String,
            lowercase: true,     
        }
    }],
    phoneNumber:{
        type: String,
        required: true
    },
    email:{
        type: String,//Tipo STRING
        unique: true,//Tem que ser unico
        required: true,// Obrigatorio
        lowercase: true,//Tudo minusculo
    },
    password:{
        type: String,//Tipo STRING
        required: true,// Obrigatorio
        select: false,//Não pode ser visto ao selecionar
    },
    createAt:{
        type: Date,//Tipo DATA
        default: Date.now,//Dado cadastrado (DATA AGORA)
    },
    updateAt:{
        type: Date,//Tipo DATA
        default: Date.now,//Dado cadastrado (DATA AGORA)
    }
});

//Criptografica de senha
ArtistSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

//Criando coleção de artista no banco
const Artist = mongoose.model('Artist', ArtistSchema);

//Exportando
module.exports = Artist;