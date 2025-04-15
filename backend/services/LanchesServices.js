import ServicesController from "./ServicesController.js";
import LanchesModel from "../src/models/LanchesModel.js";

class LanchesServices extends ServicesController{
    constructor(){
        super(LanchesModel)
    }
    
}

export default new LanchesServices()