const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/", (request, response)=>{
    response.send("This is default endpoint")
})

app.get("/data", (request, response)=>{
    let data = ["Scott", "Adam", "Tuan"]
    response.json(data)
})

app.get("/user", (request, response)=>{
    let user = {
        name: 'Scott',
        email: 'scott@ef.com',
        city: 'Boston'
    }
    response.json(user)
})

app.get("/employees", (request, response)=>{
    let employees =[
        {name: "Scott", email: "scott@ef.com", city: "Boston"},
        {name: "Adam", email: "adam@ef.com", city: "Sydney"},
        {name: "Tuan", email: "tuan@ef.com", city: "Vietnam"},
    ]
    response.json(employees)
})

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})



