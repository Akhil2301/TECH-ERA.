const express=require('express')
const router=express.Router()
const verifytoken=require('../config/jwtverify')
const {signup,authUser,userData,blockUser,unBlockUser}=require('../controllers/userController');
// const {userSignupValidator}=require('../validator/index')
console.log('connection');
router.post('/signup',signup);
router.post('/login',authUser);
router.get('/userData', userData)
router.patch('/blockUser',verifytoken.VerifyAdmin, blockUser)
router.patch('/unBlockUser',verifytoken.VerifyAdmin,unBlockUser)
module.exports=router