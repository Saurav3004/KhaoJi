import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import connectDB from "./config/db.js";
import restaurantRoute from "./routes/restaurant.js"

const app = express()

const PORT = process.env.PORT || 5001;

app.use("/api/restaurant",restaurantRoute)

app.listen(PORT,() => {
    console.log(`Restaurant service is running on port ${PORT}`)
    connectDB()
});