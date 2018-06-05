
module.exports = (pathFile) => {
    return {
        localFile: pathFile,
        s3Params: {
            Bucket: process.env.AWS_BUCKET,
            Key: "",
        },
        s3Options: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION
        }
    }
}