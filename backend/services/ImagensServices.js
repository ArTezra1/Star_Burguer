import ImagensModel from "../src/models/ImagensModel.js"
import ServicesController from "./ServicesController.js"

class ImagensServices extends ServicesController{
    constructor(){
        super(ImagensModel)
    }

    async createImage(req, res, next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

export default new ImagensServices()