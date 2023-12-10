import {NextFunction, Request, Response, Router} from 'express';
import {router as authRouter} from '../routes/services/auth';
import {router as evalRouter} from '../routes/services/eval';
//Init router
export const router = Router();

/**
 * Services routes
 */

router.use('/auth', authRouter);
router.use('/eval', evalRouter);


/**
 * default route
 */
router.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: 'You\'re in the right place ! 🧐'
    }).status(200);
});