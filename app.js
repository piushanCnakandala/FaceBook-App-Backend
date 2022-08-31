const express= require('express')
const mongoose =require('mongoose')
const app = express()
const port = 4000

const user =require('./routes/user')
const post=require('./routes/post')

const  url= 'mongodb://localhost/express'
mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on("open",()=>{
    console.log('mongodb connected')
})

app.use(express.json())
app.use('/user', user)
app.use('/post',post)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})