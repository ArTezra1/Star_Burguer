import express from "express"
import ClientesController from "../controllers/ClientesController.js";

const router = express.Router()

router.post("/clientes/create", ClientesController.create)

router.get("/clientes", ClientesController.getAll)

router.get("/clientes/query", ClientesController.getByParams)

router.get("/clientes/:id", ClientesController.getById)

router.put("/clientes/update/:id", ClientesController.update)

router.delete("/clientes/delete/:id", ClientesController.delete)

export default router