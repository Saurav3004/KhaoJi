import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: null
    },
}, {
    timestamps: true
});
const User = mongoose.model("User", schema);
export default User;
