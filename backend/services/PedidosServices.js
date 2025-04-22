import ServicesController from "./ServicesController.js";
import PedidosModel from "../src/models/PedidosSchema.js";

class PedidosServices extends ServicesController{
    constructor(){
        super(PedidosModel)
    }

    async createOrder(req, res, next){
        const { clienteId, enderecoId, lancheId, bebidaId, comboId, ...resto } = req.body
        
        try {
            
            const newOrder = await PedidosModel.create({
                clienteId,
                enderecoId,
                items:[
                    lancheId,
                    bebidaId,
                    comboId,
                ],
                ...resto
            })

            if(newOrder){
                return res.status(201).json({
                    message: "Pedido criado com sucesso."
                })
            }

            return res.status(400).json({
                message: "Erro ao criar o pedido."
            })

        } catch (error) {
            next(error)
        }
    }

}

export default new PedidosServices()