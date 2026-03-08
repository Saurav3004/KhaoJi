import axios from "axios";
import getBuffer from "../config/datauri.js";
import TryCatch from "../middlewares/trycatch.js";
import Restaurant from "../models/restaurant.js";
export const addRestaurant = TryCatch(async (req, res) => {
    const user = req.user;
    const existingRestaurant = await Restaurant.findOne({
        ownerId: user._id
    });
    if (existingRestaurant) {
        return res.status(400).json({
            message: "You already have a restaurant"
        });
    }
    ;
    const { name, description, latitude, longitude, formattedAddress, phone } = req.body;
    if (!name || !latitude || !longitude) {
        return res.status(400).json({
            message: "Please give all details"
        });
    }
    const file = req.file;
    if (!file) {
        return res.status(400).json({
            message: "Please upload image"
        });
    }
    const fileBuffer = getBuffer(file);
    if (!fileBuffer?.content) {
        return res.status(500).json({
            message: "Failed to create file buffer"
        });
    }
    const { data: uploadResult } = await axios.post(`${process.env.UTILS_SERVICE}/api/upload`, {
        buffer: fileBuffer.content
    });
    const restaurant = await Restaurant.create({
        name,
        description,
        phone,
        image: uploadResult,
        ownerId: user._id,
        autoLocation: {
            type: "Point",
            coordinates: [Number(longitude), Number(latitude)],
            formattedAddress
        }
    });
    return res.status(201).json({
        message: "Restaurant created successfully",
        restaurant
    });
});
