import express from "express"
import ClientesController from "../controllers/ClientesController.js";

import CheckAdmin from "../middlewares/ChechAdmin.js"
import CheckToken from "../middlewares/CheckToken.js"

const router = express.Router()

router.post("/signup", ClientesController.signUp)

router.post("/login", ClientesController.login)

router.get("/clientes", CheckAdmin, CheckToken, ClientesController.getAll)

router.get("/clientes/query", CheckAdmin, CheckToken, ClientesController.getByParams)

router.get("/clientes/:id", CheckToken, ClientesController.getById)

router.put("/clientes/update/:id", CheckAdmin, CheckToken, ClientesController.update)

router.delete("/clientes/delete/:id", CheckAdmin, CheckToken, ClientesController.delete)

export default router