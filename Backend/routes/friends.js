const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const cors = require('cors')
const Friend = mongoose.model("Friend")
router.use(cors())





router.get('/friends',(req,res)=>{
    Friend.find()
    .then(friends=>{
        res.json({friends})
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/friends/:id',(req,res)=>{
    Friend.findOne({id:req.params.id})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})



router.post('/friends',(req,res)=>{
    const {id,name} = req.body
    
    if(!name){
        res.status(422).json({error:"please add all the fields"})
    }
    
    const friend = new Friend({
        id,
        name
    })
    friend.save().then(result=>{
        res.json({friend:result})
    })
    .catch(err=>{
        console.log(err);
    })
})



module.exports = router