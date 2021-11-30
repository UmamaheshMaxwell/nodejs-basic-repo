const mongoose = require("mongoose")
const dbConfig = require("./UserConstants")

mongoose.connect(dbConfig.MONGODB_URL, (err)=>{
    if(err) {
        throw err
    } else {
        console.log('Connected to MongoDB Sucessfully')
    }
})


