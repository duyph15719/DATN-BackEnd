import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/orderHistory";
import { userById } from "../controllers/user";

const router = Router();

router.post("/orderHistory", create);
router.get("/orderHistory/:id", read);
router.get("/orderHistory", list);
router.put("/orderHistory/:id", update);
router.delete("/orderHistory/:id", remove);

router.param("userId", userById);

export default router;