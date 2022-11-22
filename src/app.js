import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import orderRouter from "../routes/order";
import bannerRouter from "../routes/Banner";
import categoryRoute from '../routes/Categori';
import productRoute from '../routes/product';
import userRoute from '../routes/user'
import favoritesProductRouter from '../routes/favoritesProduct';
import orderDetailRouter from '../routes/orderDetail'
import orderLogRouter from '../routes/orderLog'
import sizeRouter from "../routes/size";
import colorRoute from "../routes/Color";
import quantityRoute from "../routes/Quantity";
import receiptRoute from "../routes/Receipt";
const app = express();

const URL = 'mongodb+srv://duynguyen:Adu113210@cluster0.fh8cjz8.mongodb.net/?retryWrites=true&w=majority';
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route 12333
app.use("/api", categoryRoute);
app.use("/api", colorRoute);
app.use("/api", productRoute);
app.use("/api", userRoute);
app.use("/api", bannerRouter);
app.use("/api", orderRouter);
app.use("/api", favoritesProductRouter);
app.use("/api", orderDetailRouter);
app.use("/api", orderLogRouter);
app.use("/api", sizeRouter);
app.use("/api", quantityRoute);
app.use("/api", receiptRoute);

// connnect database
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})