import express from "express"
import ClientesController from "../controllers/ClientesController.js";

const router = express.Router()

router.post("/clients/create", () =>ClientesController.create)

export default router