import {Router} from 'express';

import {
    addCompetiteur,
} from '../../controllers/attribuer';

// Init router and path
export const router = Router();

router.post("/addcompetiteur", addCompetiteur);
