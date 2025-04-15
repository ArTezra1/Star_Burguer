import ServicesController from "./ServicesController.js";
import CombosModel from "../src/models/CombosModel.js";

class CombosServices extends ServicesController{
    constructor(){
        super(CombosModel)
    }

}

export default new CombosServices()