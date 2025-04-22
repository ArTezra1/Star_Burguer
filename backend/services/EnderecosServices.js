import ServicesController from "./ServicesController.js";
import EnderecosModel from "../src/models/EnderecosModel.js";

class EnderecosServices extends ServicesController{
    constructor(){
        super(EnderecosModel)
    }

    async createAddress(req, res, next){
        const { clienteId } = req.params
        const { ...address } = req.body
        
        try {
            
            const newAddress = await EnderecosModel.create({
                clienteId,
                ...address
            })

            if(newAddress){
                return res.status(201).json({
                    message: "Endereço criado com sucesso."
                })
            }

            return res.status(400).json({
                message: "Falha ao criar o endereço."
            })

        } catch (error) {
            next(error)
        }
    }

}

export default new EnderecosServices