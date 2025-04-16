import express from "express"
import CombosController from "../controllers/CombosController.js";

import CheckAdmin from "../middlewares/ChechAdmin.js"
import CheckToken from "../middlewares/CheckToken.js"

const router = express.Router()

router.post("/Combos/create", CheckAdmin, CheckToken, CombosController.create)

router.get("/Combos", CombosController.getAll)

router.get("/Combos/query", CombosController.getByParams)

router.get("/Combos/:id", CheckAdmin, CheckToken, CombosController.getById)

router.put("/Combos/update/:id", CheckAdmin, CheckToken, CombosController.update)

router.delete("/Combos/delete/:id", CheckAdmin, CheckToken, CombosController.delete)

export default router