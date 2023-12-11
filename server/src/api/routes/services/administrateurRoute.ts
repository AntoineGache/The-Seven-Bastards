import { Router } from "express";
import { afficherConcours } from "../../controllers/administrateur";

// Init router and path

export const router = Router();

router.get("/afficherConcours", afficherConcours);
router.post("/creerUnConcours");
