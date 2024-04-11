import mongoose from "mongoose";

const passwordResetSchema = new mongoose.Schema({
    user_id:{
        type:String,
        ref:"users",
        required:true
    },
    token: {
        type: String,
        required: true
    }
})

export default mongoose.model('passwordreset',passwordResetSchema)