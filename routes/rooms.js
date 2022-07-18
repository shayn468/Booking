import express from "express";
import { createRoom, updateRoom, deleteRoom, getRoom, getAll  } from "../controllers/rooms.js";
import Room from "../models/Room.js";
import Createerror from "../utils/error.js"
import { verifyAdmin } from "../utils/verityToken.js";

const router = express.Router();


//CREATE
router.post("/:Hotelid", verifyAdmin , createRoom);
//UPDATE

router.put("/:id",verifyAdmin, updateRoom);

//DELETE


router.delete("/:id/:Hotelid", verifyAdmin, deleteRoom);


//GET
router.get("/:id", getRoom)


//GETALL

router.get("/", getAll)

// router.get("/complains/:Roomid/:userid", async(req,res,next)=>{

//     try {
//        const FindRoom =  await Complain.find({Roomid: req.params.Roomid, userid : req.params.userid})
//        res.status(200).json(FindRoom)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })


export default router;