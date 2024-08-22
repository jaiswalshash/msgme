 import mongoose from "mongoose";

 type ConnectionObject = {
    isConnected?: number
 }

 const connection : ConnectionObject = {}

//  Connecting DB

const dbConnect = async () : Promise<void> => {
    if (connection.isConnected) {
        console.log("Database is already connected")
        return
    }

    try {
        // Check what else can we use in {}
        console.log(process.env.MONGODB_URI)
        const db = await mongoose.connect("mongodb+srv://jaiswalshashank123:8EvQs0tQwADBEX20@cluster0.xqk4x.mongodb.net/") 
        connection.isConnected = db.connections[0].readyState
        console.log("Database is connected")
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1)
    }
}

export default dbConnect