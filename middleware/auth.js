const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

// authentication 

const auth =  async (req, res, next) => {

    try {
        //  const token = req.headers.authorization.split(" ")[1];
        const token = req.headers.authorization;
        if (!token) {
            return next(
                res.status(401).json({
                    success: false,
                    message: "Please Authentication"
                })
            );
        }

        const decoded = jwt.verify(token.replace("Bearer ", ""), jwtSecrectKey);
        const users = await User.findOne({ where: { Email: decoded.Email } });
        if (!users) {
            return next(new Error("Please Authenticate ..."));
        }
        req.Email = users;
        next();
    } catch (error) {
        return next(new Error(error));
    }
}


const ChekRoll =(role) =>{
    return (req,res , next)=>{
        if(req.Email.role === role){
            next();
        }else{
            res.status(401).json({
                success :false,
                message : "Access denided ..."
            })
        }
    }
}


module.exports =  {auth , ChekRoll};
