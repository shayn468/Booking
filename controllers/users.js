
import Createerror from "../utils/error.js"
import User from "../models/User.js";


export const createUser  = async(req,res,next)=>{

    

    const Usermodal = new User(req.body)

    try {
       const usersave =  await Usermodal.save()
       res.status(200).json(usersave)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

export const updateUser = async(req,res,next)=>{


    try {
       const Updatedusersave =  await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
       res.status(200).json(Updatedusersave)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

export const deleteUser = async(req,res,next)=>{


    try {
       await User.findByIdAndRemove(req.params.id)
       res.status(200).json("User Data has been deleted!")
    } catch (error) {
        next(Createerror(300, "Error is Occured!")) 
    }
}


export const getUser = async(req,res,next)=>{

    try {
       const Finduser =  await User.findById(req.params.id)
       res.status(200).json(Finduser)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}


export const getAll = async(req,res,next)=>{

    try {
       const FindUser =  await User.find();
       res.status(200).json(FindUser)
       
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}