import { Router } from "express";
import {
  create,
  createPaymentUrl,
  list,
  read,
  remove,
  update,
  vnpayIpn,
  vnpayReturn,
} from "../controllers/order";
import { userById } from "../controllers/user";

const router = Router();

router.post("/orders", create);
router.get("/orders/:id", read);
router.get("/orders", list);
router.put("/orders/:id/:userId", update);
router.delete("/orders/:id", remove);

router.param("userId", userById);
router.post("/orders/create_payment_url", createPaymentUrl);
router.get("/orders/vnpay_return", vnpayReturn);
router.get("/orders/vnpay_ipn", vnpayIpn);
export default router;
