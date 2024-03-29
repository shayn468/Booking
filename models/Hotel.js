import mongoose from "mongoose";
const Schema = mongoose.Schema
const HotelSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    photos:{
        type: [String]
    },
    desc:{
        type: String,
        required:true

    },
    title:{
        type: String,
        required:true

    },
    rating:{
        type: String,
        min:0,
        max:5
    },
    room:{
        type: [String]
    },
    CheapestPrice:{
        type: Number,
        required:true

    },
    featured:{
        type: Boolean,
        default:false
    },

})

export default mongoose.model("Hotel" , HotelSchema)