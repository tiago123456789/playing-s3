const express = require("express");
const path = require("path");

const app = express();
const routesApp = require("./../routes/Index");
require("./LoaderEnvironment"); // Loading variables environment.
require("./Database"); // Create connection database.

/**
 * @description Settings template engine.
 */
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

/**
 * @description Settings routes application.
 */
routesApp(app);

module.exports = app;
