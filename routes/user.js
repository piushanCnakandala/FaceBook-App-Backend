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



module.exports = router