import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },  
     slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    image: String
}, { timestamps: true});

export default mongoose.model("Category", categorySchema);