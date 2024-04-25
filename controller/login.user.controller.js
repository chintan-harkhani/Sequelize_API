const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";


//user login 

const UserLogin = async(req ,res) =>{
    try {
        const {Email ,Password}=req.body;
        const FindUser = await UserService.findemail(Email);
        if(!FindUser) throw new Error("User Not Found");

         if(Password != FindUser.Password) throw new Error("Incorrect Password");

         let data ={
            Email ,
            Password,
            role : FindUser.role,
         }

         let Token = await jwt.sign(data , jwtSecrectKey);

         res.status(200).json({
             success :true,
             message : "Login Successfully",
             Token : data,Token
         })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports ={
    UserLogin
}