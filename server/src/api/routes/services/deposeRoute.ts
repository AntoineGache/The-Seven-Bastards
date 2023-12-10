import {Router} from 'express';
import {
    addImage
} from '../../controllers/depose';

// Init router and path
export const router = Router();

router.post('/addimage', addImage);