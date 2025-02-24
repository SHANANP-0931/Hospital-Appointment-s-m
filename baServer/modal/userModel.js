const mongoose = require('mongoose')

// create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },



})
const users = mongoose.model("users", userSchema)

module.exports = users