const {z} = require("zod");

const loginSchema = z.object({
    email :z 
    .string({required_error : "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message : "Email must be at least of 3 chars"})
    .max(255,{message : "Email must not be more than 255 chars"}),

    password :z
    .string({required_error : "Password must required"})
    .min(6,{message:"password must be at least of 6 chars"})
})
//Creating object Schema
const signupSchema =loginSchema.extend({
    username: z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 chars."})
    .max(255,{message:"Name must not be mmore than 255 chars."}),

    

    phone :z
    .string({required_error : "Phone is required"})
    .trim()
    .min(10,{message :"Phone must be at least 10 chars"}),

    
})

module.exports ={signupSchema,loginSchema} ;