const Posts=require('../models/post')

exports.uploadPost=async(req,res)=>{
    try{

     const posts= await Posts.create(req.body);
     res.status(200).json({msg:"post successfully !",data:posts})
    }catch(e){
       return res.status(500).json({error:e})
    }
}


exports.getOnePost=async(req,res)=>{
    try{

     const posts= await Posts.findOne({_id:req.params.id});
     res.status(200).json({msg:" successfully !",data:posts})
    }catch(e){
       return res.status(500).json({error:e})
    }
}

exports.getAllPost=async(req,res)=>{
    try{

     const posts= await Posts.find({});
     res.status(200).json({msg:" successfully !",data:posts})
    }catch(e){
       return res.status(500).json({error:e})
    }
}





exports.updatePost=async(req,res)=>{
    try{

     const posts= await Posts.findByIdAndUpdate(req.params.id ,req.body,{new:true});
     res.status(200).json({msg:"post update successfully !",data:posts})
    }catch(e){
       return res.status(500).json({error:e})
    }
}

exports.deletePost=async(req,res)=>{
    try{

     const posts= await Posts.findByIdAndDelete(req.params.id);
     res.status(200).json({msg:"post remove successfully !"})
    }catch(e){
       return res.status(500).json({error:e})
    }
}