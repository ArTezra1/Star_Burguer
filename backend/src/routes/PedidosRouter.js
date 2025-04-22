import express from "express"
import PedidosController from "../controllers/PedidosController.js";

import CheckToken from "../middlewares/CheckToken.js";
import CheckAdmin from "../middlewares/ChechAdmin.js";

const router = express.Router()

router.post("/pedidos/create", CheckToken, PedidosController.createOrder)

router.get("/pedidos", CheckAdmin, CheckToken, PedidosController.getAll)

router.get("/pedidos/query", CheckAdmin, CheckToken, PedidosController.getByParams)

router.get("/pedidos/:id", CheckToken, PedidosController.getById)

router.put("/pedidos/update/:id", CheckToken, PedidosController.update)

router.delete("/pedidos/delete/:id", CheckAdmin, CheckToken, PedidosController.delete)

export default router