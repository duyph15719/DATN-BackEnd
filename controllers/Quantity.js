import Quantity from "../models/Quantity";


export const create = async (req, res) => {
    try {
        const quantity = await new Quantity(req.body).save()
        res.json(quantity);
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const read = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const quantity = await Quantity.findOne(condition).exec();

        res.json({
            quantity

        })
    } catch (error) {

    }
}
export const list = async (req, res) => {
    try {
        const quantity = await Quantity.find().populate("idSize").populate("idProduct").populate("idColor").exec();
        res.json(quantity)
    } catch (error) {

    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const quantity = await Quantity.findOneAndDelete(condition).exec();
        res.json(quantity)
    } catch (error) {

    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const document = req.body;
    const options = { new: true }
    try {
        const quantity = await Quantity.findOneAndUpdate(condition, document, options).exec();
        res.json(quantity)
    } catch (error) {

    }
}