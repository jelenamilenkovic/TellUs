import express from "express"
import {getFeedPosts,getUserPosts,likePost} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"
import router from "./auth.js"

//read
router.get("/",verifyToken,getFeedPosts);
router.get("/:userId/posts",verifyToken,getUserPosts);


//update
router.patch("/:id/like",verifyToken,likePost);