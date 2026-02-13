import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "KhaoJi"
        });
        console.log("Database Connected");
    }
    catch (error) {
        console.log(error);
    }
};
export default connectDB;
