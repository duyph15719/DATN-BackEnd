// import { userById } from '../controllers/user';


const express = require('express');
const { listProduct, listProductDetail, createProduct, deleteProduct, updateProduct, productFilter, productSearch } = require('../controllers/Product');
const router = express.Router();



router.get('/products', listProduct)
router.get('/products/:id', listProductDetail)
router.post('/products', createProduct)
router.delete('/products/:id', deleteProduct)
router.put('/products/:id', updateProduct)
router.get('/product-search', productSearch);


// router.param("userId", userById)
export default router;