import ServicesController from "./ServicesController.js";
import EnderecosModel from "../src/models/EnderecosModel.js";

class EnderecosServices extends ServicesController{
    constructor(){
        super(EnderecosModel)
    }

}

export default new EnderecosServices