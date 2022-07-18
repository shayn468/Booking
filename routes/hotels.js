import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getAll  } from "../controllers/hotels.js";
import Hotel from "../models/Hotel.js";
import Createerror from "../utils/error.js"
import { verifyAdmin } from "../utils/verityToken.js";

const router = express.Router();


//CREATE
router.post("/", verifyAdmin , createHotel);
//UPDATE

router.put("/:id",verifyAdmin, updateHotel);

//DELETE


router.delete("/:id", verifyAdmin, deleteHotel);


//GET
router.get("/:id", getHotel)


//GETALL

router.get("/", getAll)

// router.get("/complains/:hotelid/:userid", async(req,res,next)=>{

//     try {
//        const Findhotel =  await Complain.find({hotelid: req.params.hotelid, userid : req.params.userid})
//        res.status(200).json(Findhotel)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })


export default router;