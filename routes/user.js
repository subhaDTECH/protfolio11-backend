const express=require("express")
const router=express.Router();
const {updateUser,getUser,createUser} =require('../controllers/userControllers.js')
const User=require("../models/user")

router.route('/user').post(createUser).get(getUser);
router.route('/user/:id').put(updateUser);



module.exports=router;