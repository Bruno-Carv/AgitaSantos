const {Storage} = require('@google-cloud/storage');

const path = require('path');


// Creates a client from a Google service account key.
const storage = new Storage({
    keyFilename: path.join(__dirname,"./key.json"),
    projectId: 'agita-santos',
});

if(storage){
    console.log('Storage conection');
}

module.exports = storage;