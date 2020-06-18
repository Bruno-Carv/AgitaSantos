require('dotenv/config');

const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env; 

const URL = (process.env.MONGODB_URI) ? process.env.MONGODB_URI : `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(URL,options).then(() => {
    console.log('Success conection database');
}).catch((err) => {
    console.log({error: err});
});

mongoose.Promise = global.Promise;

module.exports = mongoose;