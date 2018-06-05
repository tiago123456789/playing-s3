require("dotenv").config({ path: getPathFileVariablesEnvironments() });

function getPathFileVariablesEnvironments() {
    let environment = process.env.NODE_ENV;
    if (!environment) environment = "";
    else environment = `-${environment}`;
    return `./.env${environment}`;
};

