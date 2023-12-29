require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app= express();
const authRoute = require("./router/auth-route")
const contactRoute = require("./router/contact-route")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//handling cors
const corsOptions = {
    origin:"http://localhost:5173",
    methods: "GET , POST , PUT , DELETE , PATCH , HEAD" ,
    credentials : true,
}
app.use(cors(corsOptions))


app.use(express.json()) //This is used to allow express to deal with JSON

app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)

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
