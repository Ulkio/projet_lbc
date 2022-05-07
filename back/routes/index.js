import express from "express";
import annonceRoutes from "./annonce.routes.js";
import categoryRoutes from "./category.routes.js";

const router = express.Router();
router.use("/api/annonces", annonceRoutes);
router.use("/api/categories", categoryRoutes);

router.post("/api/upload", (req, res, next) => {
  return res.json({
    result: req.files,
  });
});

export default router;
