import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/Quantity';


const router = Router();


router.post("/quantity", create);
router.get("/quantity", list);
router.get("/quantity/:id", read);
router.delete("/quantity/:id", remove);
router.put("/quantity/:id", update)
export default router;
