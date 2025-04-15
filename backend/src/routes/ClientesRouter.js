import express from "express"
import ClientesController from "../controllers/ClientesController.js";

const router = express.Router()

router.post("/clients/create", ClientesController.create)

router.get("/clients", ClientesController.getAll)

router.get("/clients/query", ClientesController.getByParams)

router.get("/clients/:id", ClientesController.getById)

router.put("/clients/update", ClientesController.update)

router.delete("/clients/delete/:id", ClientesController.delete)

export default router