const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const jobRoute = require('./src/Routes/jobRoute')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.URI)
.then(() =>{
    console.log("Database Connected")
    app.listen(process.env.PORT || 1000, (err) => {
        if(err) {
            console.log(err)
        }else{
            console.log("Server runing... at", process.env.PORT)
        }
    })
})
.catch((error) =>{
    console.log('error', error)
})

app.use(jobRoute)