import express from 'express';

import {
    getByMontly,
    getByAnnually,   
} from "../controllers/analysis.js";

const router = express.Router();

router.get("/getAnalysisByMonthly", getByMontly);
router.get("/getAnalysisByAnnually", getByAnnually);

export default router;