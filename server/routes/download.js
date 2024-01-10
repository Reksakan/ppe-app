import express from 'express';
import { getBls } from "../controllers/download.js";

const router = express.Router();

router.get("/download", getBls);

export default router;