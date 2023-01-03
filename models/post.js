const mongoose=require("mongoose")


const postSchema= new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    linkUrl:String,
    like:[{name:String, comment:String,created_at:{type:Date,default:Date.now()}}],
   
    

},{timestamps:true})


module.exports=mongoose.model('posts',postSchema);