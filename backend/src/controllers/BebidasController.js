import BebidasServices from "../../services/BebidasServices.js";

class BebidasController{
    constructor(){

    }

    static async create(req, res, next){
        BebidasServices.create(req, res, next)
    }

    static async createVarios(req, res, next){
        BebidasServices.createVarios(req, res, next)
    }

    static async getAll(req, res, next){
        BebidasServices.getAll(req, res, next)
    }

    static async getById(req, res, next){
        BebidasServices.getById(req, res, next)
    }

    static async getByParams(req, res, next){
        BebidasServices.getByParams(req, res, next)
    }

    static async update(req, res, next){
        BebidasServices.update(req, res, next)
    }

    static async delete(req, res, next){
        BebidasServices.delete(req, res, next)
    }
}

export default BebidasController