const express = require('express')
const app = express()
const router = express.Router()

const User =require('../models/user.models')
app.use(express.json())

module.exports =router