import { Router } from "express";
import { createUser, deleteUser, updateuser, getUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

router.post('/create', createUser);
router.get('/getusers', getUsers);
router.get('/getuser/:id', getUser);
router.delete('/deleteuser/:id', deleteUser);
router.patch('/updateuser/:id', updateuser);

export default router;