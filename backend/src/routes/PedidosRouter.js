import express from "express"
import PedidosController from "../controllers/PedidosController.js";

const router = express.Router()

router.post("/pedidos/create", PedidosController.create)

router.get("/pedidos", PedidosController.getAll)

router.get("/pedidos/query", PedidosController.getByParams)

router.get("/pedidos/:id", PedidosController.getById)

router.put("/pedidos/update/:id", PedidosController.update)

router.delete("/pedidos/delete/:id", PedidosController.delete)

export default router