const mongoose  = require("mongoose")

mongoose.connect("mongodb+srv://rishabhshuklayt:g0w89APmdoKfHeDE@collegeprojects.hl9pzq6.mongodb.net/NQR_Restraunt").then(()=>{
    console.log("Database Connection Eastablished Succesfully");
}).catch((err)=>{
    console.log("Failed To Establish Database Connection ")
})