import ClientesServices from "../../services/ClientesServices.js";

class ClientesController {
    constructor() {

    }

    async create(req, res, next){
        await ClientesServices.create(req, res, next)
    }

    
}

export default new ClientesController()