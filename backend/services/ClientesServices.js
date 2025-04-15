import ServicesController from "./ServicesController.js";
import ClientesModel from "../src/models/ClientesModel.js";

class ClientesServices extends ServicesController {
    constructor() {
        super(ClientesModel)
    }

}

export default new ClientesServices()