import express from "express"
import BebidasController from "../controllers/BebidasController.js";

const router = express.Router()

router.post("/bebidas/create", BebidasController.create)

router.get("/bebidas", BebidasController.getAll)

router.get("/bebidas/query", BebidasController.getByParams)

router.get("/bebidas/:id", BebidasController.getById)

router.put("/bebidas/update/:id", BebidasController.update)

router.delete("/bebidas/delete/:id", BebidasController.delete)

export default router