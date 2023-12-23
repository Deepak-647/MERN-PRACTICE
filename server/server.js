const express = require("express");
const app= express();
const router = require("./router/auth-route")

app.use("/api/auth",router)

app.get("/",(req,res)=>{
res.status(200).send("Welcome to My Home")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})