import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/favoritesProduct";
import { userById } from "../controllers/user";

const router = Router();

router.post("/favoritesProduct/:userId",  create);
router.get("/favoritesProduct/:id", read);
router.get("/favoritesProduct", list);
router.put("/favoritesProduct/:id/:userId",  update);
router.delete("/favoritesProduct/:id/:userId", remove);

router.param("userId", userById);

export default router;