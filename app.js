const express= require('express')
const mongoose =require('mongoose')
const app = express()
const port = 4000

const  url= 'mongodb://localhost/express'
mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on("open",()=>{
    console.log('mongodb connected')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})