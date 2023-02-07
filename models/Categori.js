import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model("Category", categorySchema);