const mongoose=require("mongoose")


mongoose.connect(process.env.DBRUL,{
    
}).then((res)=>{
    console.log("database connected...")
}).catch((e)=>{
   console.log("error :", e)
})

// bjQYfLOMAd6qeXNa
// mongodb+srv://admin:<password>@cluster0.kq0mt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority