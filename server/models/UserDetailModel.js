import mongoose, { Schema } from "mongoose";

const userDetailsSchema = new mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId ,
        ref:'user',
        required: true
    },
    gender: {
        type: String,
    },
    dob: {
        type: Date,
    },
    location: {
        type: String,
    },
    headline: {
        type: String,
    },
    about:{
        type:String,
        
    },
    skills:{
        type:Array
    }
    
})

export default mongoose.model('userdetails',userDetailsSchema)