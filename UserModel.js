const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    }, 
    City: {
        type: String
    }
})

const UserDB = module.exports = mongoose.model("User", userSchema, "User")

module.exports.getUsers = function(callback){
    UserDB.find(callback)
}

module.exports.getUserById = function(id, callback){
    UserDB.find({_id: id}, callback)
}

module.exports.addUser = function(user, callback){
    UserDB.create(user, callback)
}

module.exports.updateUser = function(id, user, callback){
    UserDB.update(
                    {_id:id},
                    {
                        $set: {
                            Name: user.Name,
                            Email: user.Email,
                            City: user.City,
                        }
                    }, 
                    callback    
                )
}

module.exports.deleteUser = function(id, callback) {
    UserDB.remove({_id:id}, callback)
}