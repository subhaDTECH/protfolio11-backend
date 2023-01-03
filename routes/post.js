const express=require("express")
const router=express.Router();
const {uploadPost,updatePost,deletePost,getOnePost,getAllPost}=require('../controllers/post.js')

router.route('/new/post').post(uploadPost)
router.route('/posts').get(getAllPost)

router.route('/post/:id').put(updatePost).delete(deletePost).get(getOnePost);



module.exports=router;