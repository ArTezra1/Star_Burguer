import LanchesServices from "../../services/LanchesServices.js"

class LanchesController{
    constructor(){

    }

    static async create(req, res, next){
        LanchesServices.create(req, res, next)
    }

    static async getAll(req, res, next){
        LanchesServices.getAll(req, res, next)
    }

    static async getById(req, res, next){
        LanchesServices.getById(req, res, next)
    }

    static async getByParams(req, res, next){
        LanchesServices.getByParams(req, res, next)
    }

    static async update(req, res, next){
        LanchesServices.update(req, res, next)
    }

    static async delete(req, res, next){
        LanchesServices.delete(req, res, next)
    }
}

export default LanchesController