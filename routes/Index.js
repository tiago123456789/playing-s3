const multer = require("multer");
const fs = require("fs");
const uploadFile = multer({ dest: "./uploads" });

const uploaderS3 = require("./../service/s3/Uploader");
const publicS3 = require("./../service/s3/PublicS3");
const archiveDAO = require("./../collections/Archive");

module.exports = (app) => {

    app.get("/", async (request, response) => {
        let archives = await archiveDAO.find({});
        archives = await generateUrlToFile(archives)
        response.render("index", { archives });
    });

    app.post("/upload", uploadFile.single("foto"), (request, response) => {
        const upload = uploaderS3(request.file.path, true, null, request.file.originalname);
        upload.on("end", async () => {
            await archiveDAO.create({ name: request.file.originalname });
            fs.unlinkSync(request.file.path);
            response.redirect("/");
        });
    });

    function generateUrlToFile(files) {
        if (!Array.isArray(files)) files = [files];
        return new Promise((resolve, reject) => {
            files = files.map(file => {
                file = { name: file.name, url: publicS3.getUrlFileUploaded(file.name) };
                return file;
            });
            resolve(files);
        });
    };
};