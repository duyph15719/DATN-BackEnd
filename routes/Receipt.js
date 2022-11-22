import { userById } from '../controllers/user';


const express = require('express');
const { listReceipt, listReceiptDetail, createReceipt, deleteReceipt, updateReceipt } = require('../controllers/Receipt');
const router = express.Router();



router.get('/receipts',listReceipt)
router.get('/receipts/:id',listReceiptDetail)
router.post('/receipts',createReceipt)
router.delete('/receipts/:id',deleteReceipt)
router.put('/receipts/:id',updateReceipt)



router.param("userId", userById)
export default router;