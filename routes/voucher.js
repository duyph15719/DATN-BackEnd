import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/voucher";
import { userById } from "../controllers/user";

const router = Router();

router.post("/voucher/:userId",  create);
router.get("/voucher/:id", read);
router.get("/voucher", list);
router.put("/voucher/:id/:userId",  update);
router.delete("/voucher/:id/:userId", remove);

router.param("userId", userById);

export default router;