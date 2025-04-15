import ClientesServices from "../../services/ClientesServices.js";

class ClientesController {
    constructor() {

    }

    static async create(req, res, next){
        await ClientesServices.create(req, res, next)
    }

    static async getAll(req, res, next){
        await ClientesServices.getAll(req, res, next)
    }

    static async getById(req, res, next){
        await ClientesServices.getById(req, res, next)
    }

    static async getByParams(req, res, next){
        await ClientesServices.getByParams(req, res, next)
    }

    static async update(req, res, next){
        await ClientesServices.update(req, res, next)
    }

    static async delete(req, res, next){
        await ClientesServices.delete(req, res, next)    
    }
    
}

export default ClientesController