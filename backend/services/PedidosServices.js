import ServicesController from "./ServicesController.js";
import PedidosModel from "../src/models/PedidosSchema.js";

class PedidosServices extends ServicesController{
    constructor(){
        super(PedidosModel)
    }

}

export default new PedidosServices()