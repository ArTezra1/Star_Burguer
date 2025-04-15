import express from "express";
import LanchesController from "../controllers/LanchesController.js";

const router = express.Router()

router.post("/lanches/criar", LanchesController.create)

router.get("/lanches", LanchesController.create)

router.get("/lanches/:query", LanchesController.create)

router.get("/lanches/:id", LanchesController.create)

router.put("/lanches/update/:id", LanchesController.create)

router.delete("/lanches/delete/:id", LanchesController.create)

export default router