const express = require("express")
const router = express.Router()
require('./UserConfig')
const UserDB = require("./UserModel")

router.get("/", (req, res) =>{
    res.json("Welcome to NodeAPI connecting to MongoDB")
})

router.get("/user", (req, res) =>{
    UserDB.getUsers(function(err, data){
        if(err) {
            throw err
        }
        res.json(data)
    })
})

router.get("/user/:id", (req, res) =>{
    const userId = req.params.id
    UserDB.getUserById(userId, function(err, data){
        if(err) {
            throw err
        }
        res.json(data)
    })
})

router.post("/user", (req, res)=> {
    const user = req.body
    UserDB.addUser(user, function(err, data){
        if(err) {
            throw err
        }
        res.json(data)
    })
})

router.put("/user/:id", (req, res)=> {
    const userId = req.params.id
    const user = req.body
    UserDB.updateUser(userId, user, function(err, data){
        if(err) {
            throw err
        }
        res.json(data)
    })
})

router.delete("/user/:id", (req, res) =>{
    const userId = req.params.id
    console.log(userId)
    UserDB.deleteUser(userId, function(err, data){
        if(err) {
            throw err
        }
        res.json(data)
    })
})

module.exports = router