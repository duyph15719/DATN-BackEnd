import Category from '../models/Categori';
import slugify from "slugify"
import product from '../models/product';
export const create = async (req, res) => {

    try {
        const category = await new Category(req.body).save()

        res.json(category);
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const read = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const category = await Category.findOne(condition).exec();
        const products = await product.find({ category }).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {

    }
}
export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec();

        res.json(categories)
    } catch (error) {

    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const categories = await Category.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {

    }
}
export const update = async (request, response) => {
    const slug = slugify(request.body.name, {
        lower: true,
        locale: "vi",
    });
    request.body.slug = slug;
    try {
        const product = await Category.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "k thể update sp" })
    }
}
