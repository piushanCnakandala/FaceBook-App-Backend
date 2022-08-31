const express = require('express')
const app = express()
const router = express.Router()

const User = require('../models/user.models')
app.use(express.json())


router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (err) {
        res.send("Err : " + err)
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const users= await User.findById(req.params.id)
        res.json(users)
    }catch (err){
        res.send('Err : '+ err)
    }
})

router.post('/',async(req,res)=>{
   const user =await new User({
       firstName: req.body.firstName,
       sureName: req.body.sureName,
       gender: req.body.gender,
       dateOfBirth: req.body.dateOfBirth,
       password: req.body.password,
       phoneNumber: req.body.phoneNumber,
       email: req.body.email,
   })

    try {
        const response = await user.save();
        res.json(response)
    } catch (err) {
        res.send("Err : " + err)
    }
})

router.put('/:id',async (req,res)=>{
    try {
        const users =await User.findById(req.params.id)
        users.firstName= req.body.firstName,
            users.sureName= req.body.sureName,
            users.gender= req.body.gender,
            users.dateOfBirth= req.body.dateOfBirth,
            users.password= req.body.password,
            users.phoneNumber= req.body.phoneNumber,
            users. email= req.body.email

        const response =await users.save()
        res.json(response)
    }catch (err) {
        res.send("Err : " + err)
    }
})



module.exports = router