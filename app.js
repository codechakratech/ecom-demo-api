require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')//import
const cors = require('cors')
const ProductRoute = require('./route/productRout')
const UserRoute = require('./route/userRout')
const app = express() //initialisation

app.use(express.json())  //middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/api/product',ProductRoute)
app.use('/api/user',UserRoute)

app.listen(process.env.PORT || 5000)

async function mongoConnection() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log("error", error.message);
    }
}

mongoConnection()
