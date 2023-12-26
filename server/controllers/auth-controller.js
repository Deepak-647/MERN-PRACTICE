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
    //hashng the password
    const saltRound = 10;
    const hash_password =await bcrypt.hash(password,saltRound);


    const userCreated = await User.create({ username, email, phone, password:hash_password });
    res.status(200).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
