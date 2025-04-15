import express from "express"
import CombosController from "../controllers/CombosController.js";

const router = express.Router()

router.post("/Combos/create", CombosController.create)

router.get("/Combos", CombosController.getAll)

router.get("/Combos/query", CombosController.getByParams)

router.get("/Combos/:id", CombosController.getById)

router.put("/Combos/update/:id", CombosController.update)

router.delete("/Combos/delete/:id", CombosController.delete)

export default router