import ImagensModel from "../src/models/ImagensModel.js"
import ServicesController from "./ServicesController.js"

import multer from "multer"

import Upload from "../src/config/multer.js"

class ImagensServices extends ServicesController{
    constructor(){
        super(ImagensModel)
    }

    async createImage(req, res, next){
        const { nome, alt, "produto.id": produtoId, "produto.type": produtoType } = req.body
        try {
            
            const file = req.file

            const imagem = await ImagensModel.create({
                nome,
                src: file.path,
                produto:{
                    id: produtoId,
                    type: produtoType
                }
            })

            if(imagem){
                return res.status(201).json({
                    message: "Imagem salva com sucesso."
                })
            }

            return res.status(401).json({
                message: "Erro ao salvar imagem."
            })

        } catch (error) {
            next(error)
        }
    }
}

export default new ImagensServices()