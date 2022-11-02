import Product from "../models/product"

export const listProduct = async (request, response) => {
    try{
        const product = await Product.find().exec()
        response.json(product)
        }catch(error){
        response.status(400).json({message:"Loi"})
        }
}
export const listProductDetail = async (request, response) => {
    try {
        const product = await Product.findOne({_id:request.params.id}).exec()
        
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Lỗi data"})
    }
}
export const createProduct = async (request, response) => {
    console.log(request.body);
    try {
        const product = await Product(request.body).save()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể thêm sp"})
    }
}
export const deleteProduct = (request, response)=> {
    try {
        const product = Product.findOneAndDelete({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể xóa sp"})
    }

}
export const updateProduct = async (request, response)=> {
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể update sp"})
    }
}