import { Router } from "express";
import { createPost, deletePost, updatePost, getPost, getPosts } from "../controllers/post.controller.js";

const router = Router();

router.post('/createpost', createPost);