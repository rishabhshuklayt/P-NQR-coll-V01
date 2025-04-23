const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model("User",UserSchema)

