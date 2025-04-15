import ServicesController from "./ServicesController.js";
import BebidasModel from "../src/models/BebidasModel.js"

class BebidasServices extends ServicesController{
    constructor(){
        super(BebidasModel)
    }
    
}

export default new BebidasServices()