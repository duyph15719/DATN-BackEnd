import { Schema, model ,ObjectId} from "mongoose";

const orderSchema = new Schema({
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
}, { timestamps: true });

orderSchema.index({'$**': 'text'});

export default model("Order", orderSchema);