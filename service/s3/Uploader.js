const s3 = require("s3");
const configuracaoS3 = require("./Configuracao"); 

const getClientS3 = (configuracoes) => {
    return s3.createClient(configuracoes);
}

module.exports = (pathFile, isPublicRead, bucket, fileName) => {
    const configuracao = configuracaoS3(pathFile);
    
    if (bucket) {
        configuracao.s3Params.Bucket = bucket;
    }

    if (isPublicRead) {
        configuracao.s3Params["ACL"] = "public-read"
    }

    configuracao.s3Params.Key = fileName;
    const clientS3 = getClientS3(configuracao);
    return clientS3.uploadFile(configuracao);
}