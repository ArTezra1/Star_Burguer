import express from "express"
import BebidasController from "../controllers/BebidasController.js";

import CheckAdmin from "../middlewares/ChechAdmin.js"
import CheckToken from "../middlewares/CheckToken.js"

const router = express.Router()

router.post("/bebidas/create", CheckAdmin, CheckToken, BebidasController.create)

router.post("/bebidas/create/varios", BebidasController.createVarios)

router.get("/bebidas", BebidasController.getAll)

router.get("/bebidas/query", BebidasController.getByParams)

router.get("/bebidas/:id", CheckAdmin, CheckToken, BebidasController.getById)

router.put("/bebidas/update/:id", CheckAdmin, CheckToken, BebidasController.update)

router.delete("/bebidas/delete/:id", CheckAdmin, CheckToken, BebidasController.delete)

export default router