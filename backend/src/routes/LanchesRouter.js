import express from "express";
import LanchesController from "../controllers/LanchesController.js";

import CheckAdmin from "../middlewares/ChechAdmin.js";
import CheckToken from "../middlewares/CheckToken.js";

const router = express.Router()

router.post("/lanches/create", CheckAdmin, CheckToken, LanchesController.create)

router.get("/lanches", LanchesController.getAll)

router.get("/lanches/query", LanchesController.getByParams)

router.get("/lanches/:id", CheckAdmin, CheckToken, LanchesController.getById)

router.put("/lanches/update/:id", CheckAdmin, CheckToken, LanchesController.update)

router.delete("/lanches/delete/:id", CheckAdmin, CheckToken, LanchesController.delete)

export default router