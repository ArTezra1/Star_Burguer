import express from "express";
import LanchesController from "../controllers/LanchesController.js";

const router = express.Router()

router.post("/lanches/create", LanchesController.create)

router.get("/lanches", LanchesController.getAll)

router.get("/lanches/query", LanchesController.getByParams)

router.get("/lanches/:id", LanchesController.getById)

router.put("/lanches/update/:id", LanchesController.update)

router.delete("/lanches/delete/:id", LanchesController.delete)

export default router