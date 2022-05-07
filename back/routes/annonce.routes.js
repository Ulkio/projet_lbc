import express from "express";
import { getAnnonces, getAnnonceById, getAnnoncesByCategory, addAnnonce, updateAnnonce, deleteAnnonce } from "../controllers/annonce.controller.js";

const router = express.Router();

router.get("/", getAnnonces);
router.get("/:id", getAnnonceById);
router.get("/category/:name", getAnnoncesByCategory);
router.post("/create", addAnnonce);
router.patch("/update/:id", updateAnnonce);
router.delete("/delete/:id", deleteAnnonce);

export default router;
