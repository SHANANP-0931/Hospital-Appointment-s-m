const mongoose = require('mongoose')
const dbConnection = process.env.CONNECTION_STRING
mongoose.connect(dbConnection).then(res => {
    console.log("mongoDB Atlas connected successfull");
}).catch(err => {
    console.log("connection failed");
    console.log(err);


})