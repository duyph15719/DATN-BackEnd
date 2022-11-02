import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
}, { timestamps: true});

export default mongoose.model("Banner", bannerSchema);