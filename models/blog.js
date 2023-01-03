const mongoose=require("mongoose")


const blogSchema= new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    like:[{name:String, comment:String,created_at:{type:Date,default:Date.now()}}],
   
    

},{timestamps:true})


module.exports=mongoose.model('blogs',blogSchema);