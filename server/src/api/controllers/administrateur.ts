import { NextFunction, Request, Response } from "express";
import { JWTUtils } from "../../core/utils/JWTUtils";
import { CustomError } from "../utils/custom-error";
import { BCryptUtils } from "../utils/Bcrypt";
import { MySQL } from "../../core/database/MySQL";

export const afficherConcours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Exécution de la requête SQL pour récupérer tous les concours
    const [rows] = await MySQL.instance.execute("SELECT * FROM concours");

    // Renvoyer les résultats en tant que réponse JSON au client
    res.status(200).json(rows);

    // Si vous voulez intégrer les données directement dans le rendu HTML
    // res.render('votrePage', { concoursData: rows });
  } catch (error) {
    // En cas d'erreur, envoyer une réponse d'erreur au client
    console.error("Erreur lors de la récupération des données : ", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des données" });
  }
};
