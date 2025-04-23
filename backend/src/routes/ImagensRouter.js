import express from "express"
import ImagensController from "../controllers/ImagensController.js";

import CheckAdmin from "../middlewares/ChechAdmin.js"
import CheckToken from "../middlewares/CheckToken.js"

import Upload from "../config/multer.js";

const router = express.Router()

router.post("/imagens/upload", Upload.single("file") ,CheckAdmin, CheckToken, ImagensController.createImage)

router.get("/imagens", ImagensController.getAll)

router.get("/imagens/query", CheckAdmin, CheckToken, ImagensController.getByParams)

router.get("/imagens/:id", CheckAdmin, CheckToken, ImagensController.getById)

router.put("/imagens/update/:id", CheckAdmin, CheckToken, ImagensController.update)

router.delete("/imagens/delete/:id", CheckAdmin, CheckToken, ImagensController.delete)

export default router