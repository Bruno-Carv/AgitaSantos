const mongoose = require('../../database');

const FeedSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        require: true,
    },
    comments:[{
        name:{
            type: String,
        },
        comment:{
            type: String,
        }
    }],
    file:{
        type: String,
        required: true
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

//Criando coleção de artista no banco
const Feed = mongoose.model('Feed', FeedSchema);

//Exportando
module.exports = Feed;