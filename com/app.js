const express= require('express')
const mongoose = require('mongoose')
const User = require("./models/user");

const app= express();
mongoose.connect('mongodb://localhost:27017').then(val=>{
    console.log('connected');
})


app.post('/users',(req,res)=>{
    const user= new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch(e=>res.status(400).send(e))
})


app.get('/users',(req,res)=>{
    User.find({}).then(users=>res.send(users))
    .catch(e=>res.send(500).send(e))
})


app.get('/users/:id',(req,res)=>{
    const _id=req.params.id
    User.findById(_id).then(user=>{
        if(!user) return res.status(404).send()
        res.send(user)
    })
    .catch(e=>res.send(500).send(e))
})



app.put('/users/:id',async (req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!user) return res.status(404).send()
        res.send(user)
    }
    catch(e){
        res.status(500).send(e)

    }
})

app.delete('/users/:id',async (req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).send()
        res.send(user)
    }
    catch(e){
        res.status(500).send(e)

    }
})


app.listen(3000,()=>{
    console.log('server started');
})