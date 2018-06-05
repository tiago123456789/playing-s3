const s3 = require("s3");

module.exports =  {
    getUrlFileUploaded(fileName) {
        return s3.getPublicUrl(process.env.AWS_BUCKET, fileName, process.env.AWS_REGION);
    }
}