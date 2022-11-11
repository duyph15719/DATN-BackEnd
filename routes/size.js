import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/size";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();

router.post("/size/:userId", create);
router.get("/size/:id", read);
router.get("/size", list);
router.put("/size/:id/:userId", update);
router.delete("/size/:id", remove);

router.param("userId", userById)

export default router;