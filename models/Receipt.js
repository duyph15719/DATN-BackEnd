import mongoose, { Schema, model, ObjectId } from "mongoose";

const ReceiptSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        index: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    address: {
        type: String,
        require:true,   
    },
    payments: {
        type: Number,
        default: 0,
    },
    phone: {
        type: Number,
        default: 0,
    },
    note: {
        type: String,
    },
    UserId: {
        type: ObjectId,
        ref: "User",
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true,
    // }
}, { timestamps: true });

ReceiptSchema.index({ '$**': 'text' });

export default model("Receipts", ReceiptSchema);