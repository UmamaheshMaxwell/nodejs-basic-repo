const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./UserRoute")

const PORT = 4001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})