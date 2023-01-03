const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
     },
     roll:{
         type:String
     },
     work:{
         type:String
     },
     age:String,
     services:[
         {
             serviceName:String,
         }
     ],
     desc:String,
     socialUrl:[{url_name:String}],
     workExpreience:[{
         name:String,
         year:String,
         desc:String,
         companany:String,
         project:String
     }],
     skills:[{skill_name:String,rating:String}]
    

})


module.exports=mongoose.model("User",UserSchema);