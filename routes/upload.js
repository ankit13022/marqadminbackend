import express from "express";
import { createBlog, createReport } from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

router.post("/uploadreport", verifyUser, createReport);
router.post("/uploadblog", verifyUser, createBlog);

export default router;