const express = require("express");
const router = express.Router();


// YOU CAN USE THIS 
// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome to the page using Router")
    
// })

// OR USE THIS
router.route("/").get((req,res)=>{
    res.status(200).send("Welcome to the page using Router")
})

module.exports = router;