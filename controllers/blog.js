const Blogs=require('../models/blog')

exports.uploadBlog=async(req,res)=>{
    try{

     const blogs= await Blogs.create(req.body);
     res.status(200).json({msg:"blog post successfully !",data:blogs})
    }catch(e){
       return res.status(500).json({error:e})
    }
}

exports.getOneBlog=async(req,res)=>{
    try{
      console.log(req.params.id)
     const blogs= await Blogs.findOne({_id:req.params.id});
     res.status(200).json({msg:" successfully !",data:blogs})
    }catch(e){
       return res.status(500).json({error:e})
    }
}

exports.getAllBlog=async(req,res)=>{
    try{
      
     const blogs= await Blogs.find({});
     res.status(200).json({msg:" successfully !",data:blogs})
    }catch(e){
       return res.status(500).json({error:e})
    }
}

exports.updateBlog=async(req,res)=>{
    try{

     const blogs= await Blogs.findByIdAndUpdate(req.params.id ,req.body,{
         new:true
     });
     res.status(200).json({msg:"blog update successfully !",data:blogs})
    }catch(e){
       return res.status(500).json({error:e})
    }
}

exports.deleteBlog=async(req,res)=>{
    try{

     const blogs= await Blogs.findByIdAndDelete(req.params.id);
     res.status(200).json({msg:"blog remove successfully !"})
    }catch(e){
       return res.status(500).json({error:e})
    }
}