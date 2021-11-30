const DBCONFIG = require("./Constants")

const dbConfig = {
    user: DBCONFIG.USER,
    password: DBCONFIG.PASSWORD,
    server: DBCONFIG.SERVER,
    database: DBCONFIG.DATABASE,
    options: {
        trustServerCertificate: DBCONFIG.TRUSTSERVERCERTIFICATE
    }
}

module.exports = dbConfig