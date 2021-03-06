const express = require("express")
const app = express()
const router = require("./Routes")
const cors = require("cors")

const PORT = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", router)

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})