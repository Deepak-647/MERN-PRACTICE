const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the page using Controller");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({
      msg: "Registration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);

  }
};

const login = async (req,res) => {
  try {
    const {email , password} =req.body;
    const userExist = await User.findOne({email});

    if(!userExist){
      return res.status(400).json("Invalid Credentials")
    }

    const user =await userExist.comparePassword(password)
    if(user){
      res.status(200).json({
        msg: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }else{
      res.status(401).json({message : "Invalid email or password"})
    }
  } catch (error) {
    // res.status(500).json("Internal Server Error")
    next(error)
    console.log(error)
  }

}

//User logic - to send user data
const user =async (req,res)=>{
  try {
    const userData = req.user;
    console.log(userData)
    return res.status(200).json({ userData})
  } catch (error) {
    console.log(`error from the user route ${error}`)
  }

}


module.exports = { home, register ,login ,user };
