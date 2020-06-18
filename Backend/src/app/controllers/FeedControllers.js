const Feed = require('../models/Feed');
const Artist = require('../models/Artist');

const { Storage } = require('../../services/cloud');

const bucket = Storage.bucket('agita-santos');

/**
 * Estrutura de CRUD do model Artista 
 */
module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;
        const count = await Feed.countDocuments();
        const feeds = await Feed.find().limit(5).skip((page - 1) * 5).sort({ createAt: 1 });
        response.header('X-Total-Count', count);
        return response.json(feeds);
    },

    async post(request, response) {
        const { id, page = 1 } = request.query;
        response.json(id);
        const count = await Feed.countDocuments();
        const artist = await Artist.findById({ _id: id });
        const feeds = await Feed.find({ author: id }).limit(5).skip((page - 1) * 5).sort({ createAt: -1 });
        feeds.author = artist.name;
        console.log(feeds);
        response.header('X-Total-Count', count);
        return response.json(feeds);
    },

    async create(request, response) {
        const { title, description, author, file } = request.body;
        try {
            const { id } = await Feed.create(request.body);
            return response.json(id);
        } catch{
            return response.status(401).json({ error: 'Operation not permitted. ' });
        }
    },

    async update(request, response) {

    },

    async destroy(request, response) {

    },

    upload(req, res, next) {

        if (!req.file) {
            res.status(400).json({ error: "No file uploaded." });
            return;
        }

        // Create a new blob in the bucket and upload the file data.
        const blob = bucket.file(req.file.originalname);

        // Make sure to set the contentType metadata for the browser to be able
        // to render the image instead of downloading the file (default behavior)
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        });

        blobStream.on("error", err => {
            next(err);
            return;
        });

        blobStream.on("finish", () => {
            const config = {
                action: 'read',
                expires: '01-01-5000',
            };
            blob.getSignedUrl(config).then((data) => {
                const publicUrl = data[0];
                blob.makePublic().then(() => {
                    res.status(200).json({ uri: publicUrl });
                });
            });
        });

        blobStream.end(req.file.buffer);
    },
}
