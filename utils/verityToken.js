import JWT from "jsonwebtoken"
import CREATEError from "./error.js"


export const verifyToken = (req, res, next) =>{

    const token = req.cookies.access_token;
    if(!token){
    return next(CREATEError(401, "You are not authorized!"))
}
    JWT.verify(token, process.env.JWT, (error, user)=>{
        if(error){
            return next(CREATEError(403, "Invalid Token"))
        }
        req.user = user
        next();
    });

}


export const verifyUser = (req,res,next) =>{

    verifyToken(req,res, next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            return next(CREATEError(403, "Invalid Token"))
        }
    })


}
export const verifyAdmin = (req,res,next) =>{

    verifyToken(req,res, ()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            return next(CREATEError(403, "NOt Authorized!"))
        }
    })


}




