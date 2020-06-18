require('dotenv/config');

const AWS = require('aws-sdk');

AWS.config.update({region: 'sa-east-1'});

const s3 = new AWS.S3({
    accessKeyId: (process.env.AWS_S3_KEY_ID) ? process.env.AWS_S3_KEY_ID : null,
    secretAccessKey: (process.env.AWS_S3_KEY_SECRET) ? process.env.AWS_S3_KEY_SECRET : null,
    signatureVersion: 'v4',
    apiVersion: '2006-03-01'
});

const params = {
    Bucket: (process.env.AWS_S3_KEY_ID) ? process.env.AWS_S3_KEY_ID : null,
    CreateBucketConfiguration: {
        LocationConstraint: (process.env.AWS_S3_LOCATION) ? process.env.AWS_S3_LOCATION : null
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});

module.exports = s3;