const express = require("express")
const sql = require("mssql")

const dbConfig = require("./Config")

const router = express.Router();



router.get("/", (request, response) => {
    response.json({message: 'Welcome to NodeJS API'})
})

router.get("/students", (request, response) => {
    sql.connect(dbConfig, (err) => {
        if(err) {
            throw err
        } 
        const request = new sql.Request();
        const selectQuery =`SELECT * FROM Student` 
        request.query(selectQuery, (err, data) =>{
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
        const selectQueryById =`SELECT * FROM Student  WHERE Id=${studentId}` 
        request.query(selectQueryById, (err, data) =>{
            if(err) {
                throw err
            }
            response.json(data.recordset)
        })
    }) 
})

router.post("/student", (request, response) => {
    console.log(request.body)
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

router.put("/student/:id", (request, response) => {
    const studentId = request.params.id
    const {Name, Email, City} = request.body

    sql.connect(dbConfig, (err) => {
        if(err) {
            throw err
        } 

        const request = new sql.Request();
        const updateQuery = `Update Student SET Name='${Name}', Email='${Email}', City ='${City}' WHERE Id=${studentId}`
        request.query(updateQuery, (err, data) =>{
            if(err) {
                throw err
            }
            response.json(data)
        })
    }) 
})

router.delete("/student/:id", (request, response) => {
    const studentId = request.params.id
    sql.connect(dbConfig, (err) => {
        if(err) {
            throw err
        } 

        const request = new sql.Request();
        const deleteQuery = `DELETE FROM Student WHERE Id=${studentId}`
        request.query(deleteQuery, (err, data) =>{
            if(err) {
                throw err
            }
            response.json(data)
        })
    }) 
})

module.exports = router