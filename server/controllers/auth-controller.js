const home = async (req, res) => {
  try {
    res
    .status(200)
    .send("Welcome to the page using Controller");
  } catch(error){
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    res
    .status(200)
    .send("Welcome to the Register page using Controller");
  } catch(error){
    console.log(error);
  }
};

module.exports = {home,register};
