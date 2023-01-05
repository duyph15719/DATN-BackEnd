import { Schema, model, ObjectId } from "mongoose";

const orderSchema = new Schema({
    orderId: {
        type: ObjectId,
        ref: "Order"
    },
    ProductsId: {
        type: ObjectId,
        ref: "Product"
    },
    productName:{
        type:String
    },
    price: {
        type: String,
    },
    sizeId: {
        type: ObjectId,
        ref: "Size"
    },
    sizeName: {
        type: Number,
    },
    colorId: {
        type: ObjectId,
        ref: "Color"
    },
    colorName: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    total:{
        type: Number,
    },
    image:{
        type: String,
    }

}, { timestamps: true });

orderSchema.index({'$**': 'text'});

export default model("OrderDetail", orderSchema);