//  **Using Common-JS**
require("dotenv").config(); // Priority 
const express = require("express");
const app = express();
const Mongoose = require("./config/mongoose") // Db connection Import
// Logger 
const morgan = require("morgan")
//Routes 
const UserAuthRoutes = require("./routes/authRoutes")
const PORT = 3000 || process.env.PORT

app.use(morgan('dev'));
// Middleware to parse JSON
app.use(express.json()); 

// Middleware to parse URL-encoded data (if using form data)
app.use(express.urlencoded({ extended: true }));
app.use("/api", UserAuthRoutes);

// Index Routes For test
app.get('/',(req,res)=>{
    res.send("hello world") // send to server
})



// Universal 404 Error Handler
app.get("*",(req,res)=>{
    res.send("Hello Developer , The Route You Are Looking For Is Not defined in the System")
})
// Unviersal Error Handling Middleware
app.get((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({message:'Internal Server Error', error: err.message})
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})