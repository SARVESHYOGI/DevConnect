import { Router } from "express";
import { createUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.post('/create', createUser);
// router.get('/users', getUsers);
// router.get('/users/:id', getUser);
// router.put('/users/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

export default router;