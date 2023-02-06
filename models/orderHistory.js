import { Schema, model, ObjectId } from "mongoose";

const orderLogsSchema = new Schema({
    orderId: {
        type: ObjectId,
        ref: "Order"
    },
    statusOrderLogs: {
        type: Number,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User",
        transform: v => v == null ? '' : v
    },
    userName: {
        type: String,
        required: true
    },
    reasonOfOrder: {
        type: String
    },

}, { timestamps: true });

orderLogsSchema.index({'$**': 'text'});

export default model("OrderLog", orderLogsSchema);