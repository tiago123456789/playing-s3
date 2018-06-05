const mongoose = require("mongoose");

// Setting lib promise used mongoose.
mongoose.Promise = Promise;

// Connected database.
mongoose.connect(process.env.URL_DB);