const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const signup = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;
  const userExist = await User.findOne({ $or: [{ email }, { phone }] });

  if (userExist) {
    res.status(400);
    throw new Error("User already Exists");
  }
  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      isAdmin: user.isAdmin,
      email: user.email,
      token:generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Error Occured !");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;
 
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      isAdmin: user.isAdmin,
      email: user.email,
      token:generateToken(user._id),
    });
  }else{
    res.status(400);
    throw new Error('Invalid Email or Password!')
  }
});

const userData = asyncHandler(async (req, res) => {
  
  const users = await User.find({isAdmin:false});
  res.json({
    users
  })
});


const blockUser= asyncHandler(async (req, res) => {
 
  const { _id } = req.body 
  const userData = await User.findOne({ _id }).catch(() => { throw new Error('User Not found') })  
  await userData.updateOne({
    $set: { status: false }
  })
  res.json({ userData })
})
const unBlockUser= asyncHandler(async (req, res) => {
  
  const { _id } = req.body
  const userData = await User.findOne({ _id }).catch(() => { throw new Error('User Not found') })
  await userData.updateOne({
    $set: { status: true }
  })
  res.json({ userData })
})

module.exports = { signup, authUser,userData,blockUser,unBlockUser};
