
const UserModel = require("../../models/user.models")
 const registerUserController = async(req,res,next) =>{
    try {
        console.log("nter in the registered routes")
        const {fullname, phone, email} = req.body;
        
        if(!fullname || !phone || !email){
            return res.status(301).json({message: "Missing Fields detected"})
        }
        // Model save 
    
        const newUser = UserModel({
            fullname,
            phone,
            email
        })
    
        await newUser.save()
    
        return res.status(201).json({message:"User Registered Succefully", success:true})

    } catch (err) {
        next(err)
    }
}

module.exports = registerUserController