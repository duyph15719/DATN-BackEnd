import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image: String
}, { timestamps: true });

export default mongoose.model("Color", colorSchema);