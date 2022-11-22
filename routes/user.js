import { Router } from 'express';
import { signin, signup,listUser,readUser,removeUser,updateUser } from '../controllers/user.js';
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/users", listUser);
router.get("/users/:id", readUser);
router.delete("/users/:id", removeUser);
router.put("/users/:id", updateUser)
export default router;