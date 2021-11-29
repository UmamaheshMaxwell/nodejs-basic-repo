const express = require("express")
const app = express()
const cors = require("cors")
const sql = require("mssql")

const router = express.Router();

const dbConfig = {
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'StudentDB',
    options: {
        trustServerCertificate: true
    }
}

app.use(cors())

router.get("/", (request, response) => {
    response.json({message: 'Welcome to NodeJS API'})
})

router.get("/students", (request, response) => {
    sql.connect(dbConfig, (err) => {
        if(err) {
            throw err
        } 

        const request = new sql.Request();
        request.query("SELECT * FROM Student", (err, data) =>{
            if(err) {
                throw err
            }
            response.json(data.recordset)
        })
    })
    
})


app.use("/", router)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})