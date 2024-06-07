const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")        // allows resourse sharing between two 
require('dotenv').config();


// MongoDB Compass Connection
//const dburl = "mongodb://localhost:27017/demoproject32"
const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


/*
// MongoDB Atlas Connection
const dburl = "mongodb+srv://admin:admin@cluster0.1mrom.mongodb.net/demoproject32?retryWrites=true&w=majority"
mongoose.connect(dburl).then(() => {
    console.log("Connected to MongoDB Atlas Successfully")
}).catch((err) => {
    console.log(err.message)
});
*/

const app = express()
app.use(express.json())
app.use(cors())

const userrouter = require("./routes/userroutes")

app.use("",userrouter)


// const port= 2032
const port = process.env.PORT || 2004   //if env file is not there  or will be taken
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})