import mongoose from "mongoose";

  const connectToDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDb successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB