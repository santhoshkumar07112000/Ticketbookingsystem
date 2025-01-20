const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        match: /^[a-zA-Z0-9_-]{3,20}$/,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    phoneNumber: {
        type: Number,
        require: true,
        match: /^\+?[1-9]\d{1,14}$/,
    },
    Password: {
        type: String,
        require: true,  
    },
    role: {
        type: String,
        require: true,
        enum: ["admin","user"],
        default: "user"
    }
})

const Users = mongoose.model("Users",Userschema);

module.exports = Users