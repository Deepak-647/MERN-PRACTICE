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
      return res.status(400).json({ msg: "Email already exist" });
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

    const user =await bcrypt.compare(password,userExist.password)
    if(user){
      res.status(200).json({
        msg: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }else{
      res.status(401).json({Message : "Invalid email or password"})
    }
  } catch (error) {
    res.status(500).json("Internal Server Error")
    console.log(error)
  }

}

module.exports = { home, register ,login };
