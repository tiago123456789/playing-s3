const mongoose = require("mongoose");

const archiveSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("archive", archiveSchema);