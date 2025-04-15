import express from "express"
import EnderecosController from "../controllers/EnderecosController.js";

const router = express.Router()

router.post("/enderecos/create", EnderecosController.create)

router.get("/enderecos", EnderecosController.getAll)

router.get("/enderecos/query", EnderecosController.getByParams)

router.get("/enderecos/:id", EnderecosController.getById)

router.put("/enderecos/update/:id", EnderecosController.update)

router.delete("/enderecos/delete/:id", EnderecosController.delete)

export default router