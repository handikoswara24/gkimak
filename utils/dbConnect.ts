import mongoose from "mongoose";

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    //@ts-ignore
    mongoose.connect(process.env.MONGO_URI, {
        
    }).then(con => console.log("Conencted to database"))
}

export default dbConnect;