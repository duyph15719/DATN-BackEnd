import Product from "../models/product"
import slugify from "slugify"
export const listProduct = async (request, response) => {
    try {
        const product = await Product.find().populate("categoryId").exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Loi" })
    }
}
export const listProductDetail = async (request, response) => {
    try {
        const product = await Product.findOne({ _id: request.params.id }).exec()

        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Lỗi data" })
    }
}
export const createProduct = async (req, res) => {
    const slug = slugify(req.body.name, {
        lower: true,
        locale: "vi",
    });
    req.body.slug = slug;
    try {
        const product = await Product(req.body).save();
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "khong them duoc du lieu",
        });
    }
};
// export const createProduct = async (request, response) => {
//     console.log(request.body);
//     try {
//         const product = await Product(request.body).save()
//         response.json(product)
//     } catch (error) {
//         response.status(400).json({ message: "k thể thêm sp" })
//     }
// }
export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "k thể xóa sp" })
    }

}
export const updateProduct = async (request, response) => {
    const slug = slugify(request.body.name, {
        lower: true,
        locale: "vi",
    });
    request.body.slug = slug;
    try {
        const product = await Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "k thể update sp" })
    }
}

