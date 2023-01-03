const express=require("express")
const router=express.Router();
const {uploadBlog,deleteBlog,updateBlog,getOneBlog,getAllBlog}=require('../controllers/blog.js');
// const { get } = require("./user.js");

router.route('/new/blog').post(uploadBlog)
router.route('/blogs').get(getAllBlog)
router.route('/blog/:id').get(getOneBlog).delete(deleteBlog).put(updateBlog);



module.exports=router;