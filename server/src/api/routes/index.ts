import { NextFunction, Request, Response, Router } from "express";
import { router as authRouter } from "../routes/services/authRoute";
import { router as evalRouter } from "../routes/services/evalRoute";
import { router as deposeRouter } from "../routes/services/deposeRoute";
import { router as adminRouther } from "../routes/services/administrateurRoute";
import {router as attribuerRoute} from '../routes/services/attribuerRoute'

//Init router
export const router = Router();

/**
 * Services routes
 */


router.use("/auth", authRouter);
router.use("/eval", evalRouter);
router.use("/depose", deposeRouter);
router.use("/auth", authRouter);
router.use("/admin", adminRouther);
router.use('/attribuer', attribuerRoute)

/**
 * default route
 */
router.use("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .json({
      message: "You're in the right place ! 🧐",
    })
    .status(200);
});
