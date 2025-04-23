import ImagensModel from "../src/models/ImagensModel.js"
import ServicesController from "./ServicesController.js"

import fs from "fs"

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

    async deleteImage(req, res, next){
        try {
            
            const imagemDeletada = await ImagensModel.findByIdAndDelete(req.params.id)

            if(imagemDeletada){
                fs.unlinkSync(imagemDeletada.src)

                return res.status(200).json({
                    message: "Imagem deletada com sucesso."
                })
            }

            return res.status(400).json({
                meddage: "Erro ao deletar imagem."
            })

        } catch (error) {
            next(error)
        }
    }
}

export default new ImagensServices()