import {NextFunction, Request, Response, Router} from 'express';
import {router as authRouter} from './services/authRoute';

//Init router
export const router = Router();

/**
 * Services routes
 */

router.use('/auth', authRouter);


/**
 * default route
 */
router.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'You\'re in the right place ! 🧐'
    }).status(200);
});