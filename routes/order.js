import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/order";
import { userById } from "../controllers/user";


const router = Router();

router.post("/orders", create);
router.get("/orders/:id", read);
router.get("/orders", list);
router.put("/orders/:id/:userId", update);
router.delete("/orders/:id", remove);

router.param("userId", userById);

export default router;