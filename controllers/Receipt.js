import Receipt from "../models/Receipt"
// import slugify from "slugify"
export const listReceipt = async (request, response) => {
    try {
        const Receipts = await Receipt.find().populate("UserId").exec()
        response.json(Receipts)
    } catch (error) {
        response.status(400).json({ message: "Loi" })
    }
}
export const listReceiptDetail = async (request, response) => {
    try {
        const Receipts = await Receipt.findOne({ _id: request.params.id }).exec()

        response.json(Receipts)
    } catch (error) {
        response.status(400).json({ message: "Lỗi data" })
    }
}
export const createReceipt = async (request, response) => {
    console.log(request.body);
    try {
        const Receipts = await new Receipt(request.body).save()
        response.json(Receipts)
    } catch (error) {
        response.status(400).json({ message: "k thể thêm sp" })
    }
}
export const deleteReceipt = async (request, response) => {
    try {
        const Receipts = await Receipt.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(Receipts)
    } catch (error) {
        response.status(400).json({ message: "k thể xóa sp" })
    }

}
export const updateReceipt = async (request, response) => {
    try {
        const Receipts = await Receipt.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(Receipts)
    } catch (error) {
        response.status(400).json({ message: "k thể update sp" })
    }
}