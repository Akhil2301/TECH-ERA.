const express=require('express')
const router=express.Router()
const {signup,authUser}=require('../controllers/userController');
// const {userSignupValidator}=require('../validator/index')

router.post('/signup',signup);
router.post('/login',authUser);
module.exports=router