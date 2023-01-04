import { Router } from "express";
import { create, list, read, remove, update,createPaymentUrl,vnpayReturn,vnpayIpn } from "../controllers/order";
import { userById } from "../controllers/user";


const router = Router();

router.post("/orders", create);
router.get("/orders/:id", read);
router.get("/orders", list);
router.put("/orders/:id/:userId", update);
router.delete("/orders/:id", remove);
router.post("/order/create_payment_url", createPaymentUrl);
router.get("/order/vnpay_return", vnpayReturn);
router.get("/order/vnpay_ipn", vnpayIpn);
router.param("userId", userById);

export default router;