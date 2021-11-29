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
app.use(express.json())
app.use(express.urlencoded({extended: true}))

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

router.get("/student/:id", (request, response) => {
    const studentId = request.params.id
    sql.connect(dbConfig, (err) => {
        if(err) {
            throw err
        } 

        const request = new sql.Request();
        request.query(`SELECT * FROM Student  WHERE Id=${studentId}`, (err, data) =>{
            if(err) {
                throw err
            }
            response.json(data.recordset)
        })
    }) 
})

router.post("/student", (request, response) => {
    const body = request.body
    const {Name, Email, City} = body
    sql.connect(dbConfig, (err) => {
        if(err) {
            throw err
        } 

        const request = new sql.Request();
        const insertQuery = `INSERT INTO Student (Name, Email, city) VALUES ('${Name}', '${Email}', '${City}')`
        request.query(insertQuery, (err, data) =>{
            if(err) {
                throw err
            }
            response.json(data)
        })
    }) 
})




app.use("/", router)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})