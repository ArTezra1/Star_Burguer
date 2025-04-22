import EnderecosServices from "../../services/EnderecosServices.js";

class EnderecosController{
    constructor(){
        
    }

    static async createAddress(req, res, next) {
        EnderecosServices.createAddress(req, res, next)
    }

    static async getAll(req, res, next) {
        EnderecosServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        EnderecosServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        EnderecosServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        EnderecosServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        EnderecosServices.delete(req, res, next)
    }
}

export default EnderecosController