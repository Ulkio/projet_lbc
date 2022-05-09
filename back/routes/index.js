import express from "express";
import annonceRoutes from "./annonce.routes.js";
import categoryRoutes from "./category.routes.js";
import fs from "fs";
import multer from "multer";

const router = express.Router();
router.use("/api/annonces", annonceRoutes);
router.use("/api/categories", categoryRoutes);

const upload = multer();

router.post("/api/upload", upload.any(), (req, res, next) => {
  fs.writeFile("public/images/" + req.files[0].originalname, req.files[0].buffer, (err) => {
    if (err) {
      return res.json({
        status: 500,
        msg: err,
      });
    }
    return res.json({
      status: 200,
      msg: "Success",
    });
  });
});

export default router;
