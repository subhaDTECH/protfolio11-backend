const app=require("./app")
const port= process.env.PORT || 5000 ;
require('dotenv').config({path:"./config/.env"})
require('./db/conn')


app.listen(port,()=>{
    console.log("server run on port 5000")
})