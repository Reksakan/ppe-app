import express from 'express';
import { getTrendsList } from "../controllers/ppi.js";
import { getGraphList} from "../controllers/ppi.js";

const router = express.Router();

router.get("/overview", getTrendsList);
router.get("/graphs", getGraphList);
export default router;