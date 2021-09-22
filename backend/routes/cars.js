const express  = require('express');
const router   = express.Router();
const Car = require('../models/cars')

router.get('/allCars',async (req,res)=>{
    var toSend = {
        status:false,
        data:null
    }
    await Car.find().then(async(data)=>{
        for(x=0;x<data.length;x++){
            var model=data[x].models
            model.sort((a,b)=>{
                return a.cost-b.cost;
            })
            data[x].models=model
            
        }
        
        toSend.status=true
        toSend.data=data
        res.send(toSend)
    }).catch((err)=>{
        console.log("Error");
        res.send(toSend)
    })
    
    
})


router.post("/car",async (req,res)=>{
    
    console.log(req.body.carName)
    var toSend={
        status:false,
        data:null
    }
    await Car.find({name:req.body.carName}).then(async (data)=>{
        toSend.status=true
        toSend.data=data
        res.send(toSend)
    }).catch((err)=>{
        console.log("Error"+err);
        res.send(toSend);
    })
    
})

module.exports = router; 