const express =require('express')
const app=express()
const router =express.Router()
const Post =require('../models/post.models')

app.use(express.json)

module.exports=router