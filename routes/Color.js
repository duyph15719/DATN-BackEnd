import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/color';
const router = Router();


router.post("/color", create);
router.get("/colors", list);
router.get("/color/:id", read);
router.delete("/color/:id", remove);
router.put("/color/:id", update)
export default router;
