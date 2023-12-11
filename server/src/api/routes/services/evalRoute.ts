import {Router} from 'express';

import {
    recupConcours,
    evaluation,
} from '../../controllers/eval';

// Init router and path
export const router = Router();

router.get("/recupconcours", recupConcours);

router.post("/evaluation", evaluation);