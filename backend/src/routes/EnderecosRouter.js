import express from "express"
import EnderecosController from "../controllers/EnderecosController.js";
import CheckAdmin from "../middlewares/ChechAdmin.js";
import CheckToken from "../middlewares/CheckToken.js";

const router = express.Router()

router.post("/enderecos/create", CheckToken, EnderecosController.create)

router.get("/enderecos", CheckAdmin, CheckToken, EnderecosController.getAll)

router.get("/enderecos/query", CheckAdmin, CheckToken, EnderecosController.getByParams)

router.get("/enderecos/:id", CheckToken, EnderecosController.getById)

router.put("/enderecos/update/:id", CheckToken, EnderecosController.update)

router.delete("/enderecos/delete/:id", CheckToken, EnderecosController.delete)

export default router