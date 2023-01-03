const User=require("../models/user.js")



exports.createUser= async(req,res)=>{
    try{
        const user= await User.create(req.body);
        res.status(200).json({msg:"data store successfully",data:user})

        
    }catch(e){
           return res.status(400).json({"msg":e})
    }
 }

 exports.getUser= async(req,res)=>{
    try{
        const user= await User.find({});
        res.status(200).json({msg:" successfully",data:user})

        
    }catch(e){
           return res.status(400).json({"msg":e})
    }
 }

 exports.updateUser= async(req,res)=>{
    try{
        
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({msg:"data update successfully",data:user})

        
    }catch(e){
           return res.status(400).json({"msg":e})
    }
 }




