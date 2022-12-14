import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image: String
}, { timestamps: true });

export default mongoose.model("Category", categorySchema);