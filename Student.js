const express = require("express")
const app = express()
const router = require("./Routes")

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})