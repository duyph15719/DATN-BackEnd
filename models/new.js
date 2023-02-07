import mongoose, { Schema, ObjectId } from "mongoose";
const NewsSchema = new Schema(
    {
        title: {
            type: String,

        },
        slug: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        desc: {
            type: String,

        },
        content: {
            type: String,

        },

    },
    { timestamps: true },
);
export default mongoose.model("News", NewsSchema);