import Color from '../models/color';
import slug from 'slug';
export const create = async (req, res) => {

    try {
        const color = await new Color(req.body).save()
        res.json(color);
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const read = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const color = await Color.findOne(condition).exec();
        const products = await Product.find({ color }).select("-color").exec();
        res.json({
            color,
            products
        })
    } catch (error) {

    }
}
export const list = async (req, res) => {
    try {
        const categories = await Color.find().exec();
        res.json(categories)
    } catch (error) {

    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const categories = await Color.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {

    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const document = req.body;
    const options = { new: true }
    try {
        const color = await Color.findOneAndUpdate(condition, document, options).exec();
        res.json(color)
    } catch (error) {

    }
}