require("dotenv").config();
const express = require("express");
const app= express();
const router = require("./router/auth-route")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json()) //This is used to allow express to deal with JSON

app.use("/api/auth",router)

app.get("/",(req,res)=>{
res.status(200).send("Welcome to My Home")
})

app.use(errorMiddleware);
const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on Port ${PORT}`)
    })
})
