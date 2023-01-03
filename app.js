const express=require("express")
const app=express()
const userRoute=require("./routes/user.js")
const postRoute=require("./routes/post.js")
const blogRoute=require("./routes/blog.js")
const cors=require("cors")


//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

//route
app.use('/api/v1',userRoute);
app.use('/api/v1',postRoute);
app.use('/api/v1',blogRoute);



module.exports=app;