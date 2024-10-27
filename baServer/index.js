const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/router')
require('./dbConnections/connection')

const baServer = express()

baServer.use(cors())

baServer.use(express.json())


baServer.use(router)

// baServer.use('/uploads', express.static('./uploads'))


const PORT = 3000 || process.env.PORT

// run
baServer.listen(PORT, () => {
    console.log(`baServer starts at port :${PORT} and wyting for client request!!!!`);

})

// // resolve request
// baServer.post('/', (req, res) => {
//     res.status(200).send(`<h1 style="color:red">pfserver starts  at port  and wyting for client request!!!!</h1>`)
// })
