import mongoose, { Schema } from "mongoose";

const quantitySchema = new Schema({
    idProduct: {
        type: mongoose.Schema.ObjectId,
        ref: "Products",
        required: true
    },
    idSize: {
        type: mongoose.Schema.ObjectId,
        ref: "Size",
        required: true
    },
    idColor: {
        type: mongoose.Schema.ObjectId,
        ref: "Color",
        required: true
    },
    quantity: {
        type: Number,
    },
}, { timestamps: true });

export default mongoose.model("Quantity", quantitySchema);