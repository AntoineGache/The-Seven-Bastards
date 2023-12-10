import {Router} from 'express';
import {
    login,
    logout,
    register
} from '../../controllers/user';

// Init router and path
export const router = Router();

router.post('/register', register);

router.post('/login', login);

router.get('/logout', logout);