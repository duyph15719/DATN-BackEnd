import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/Banner';

const router = Router();


router.post("/banner", create);
router.get("/banner", list);
router.get("/banner/:id", read);
router.delete("/banner/:id", remove);
router.put("/banner/:id", update)
export default router;
