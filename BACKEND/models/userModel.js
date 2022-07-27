const mongoose =require('mongoose');
const jwt =require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false}
},{
    timestamps:true,
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt=await bcrypt.genSalt(13);
    this.password=await bcrypt.hash(this.password,salt);
});

userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const user =mongoose.model('User',userSchema)
module.exports=user