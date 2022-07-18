import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Authrouter from "./routes/auth.js";
import Hotelsrouter from "./routes/hotels.js";
import Roomsrouter from "./routes/rooms.js";
import Usersrouter from "./routes/users.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

const connect = async()=>{
    try {
        
        await mongoose.connect(process.env.MONGO)

    } catch (error) {
    throw error;    
    }

}

// on is event listerner
mongoose.connection.on("disconnected" , ()=> {
    console.log("mongoose disconnected")
})

mongoose.connection.on("connected" , ()=> {
    console.log("mongoose connected")
})


app.use(cookieParser())
app.use(express.json())   //middleware converting req body into json object


app.get("/", (req,res, next)=>{
    // console.log(req);
    res.send("Hello world")
})

app.use("/api/hotels" , Hotelsrouter)
app.use("/api/auth" , Authrouter) 
app.use("/api/users" , Usersrouter)
app.use("/api/rooms" , Roomsrouter)


// Error handling middleware
app.use((error,req,res,next)=>{
    const ErrorStatus = error.status || 500
    const ErrorMessage = error.message || "Something went wrong"
    return res.status(ErrorStatus).json(ErrorMessage)
})


//app.use("/api/rooms" , Roomsrouter)

// /api/hotels/complains/:hotelid/:userid

app.listen(3000 , ()=>{
    connect();
    console.log("connected to local host" )
})
