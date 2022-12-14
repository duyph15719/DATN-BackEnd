import mongoose, { Schema, model, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        index: true,
    },
    image: {
        type: String,

    },
    price: {
        type: Number,

    },
    description: String,
    status: {
        type: Number,
        default: 0,
    },
    view: {
        type: Number,
        default: 0,
    },
    favorites: {
        type: Number,
        default: 0,
    },
    categoryId: {
        type: ObjectId,
        ref: "Category",

    },
    gale: {
        type: String,
    },
    colors: [{
        colorName: {
            type: String,
            required: true,
        },
        sizes: [{
            sizeName: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true
            }
        }]
    }]


}, { timestamps: true });

productSchema.index({ '$**': 'text' });

export default model("Products", productSchema);