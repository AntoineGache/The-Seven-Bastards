import {Router} from 'express';
import {
    recupConcours,

} from '../../controllers/eval';

// Init router and path
export const router = Router();

router.get('/recupconcours', recupConcours);