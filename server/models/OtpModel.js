import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now(),
        required: true,
        get: (timestamp) => timestamp.getTime(),
        set: (timestamp) => new Date(timestamp),
    }
},
)

export default mongoose.model('otp', otpSchema)