import CombosServices from "../../services/CombosServices.js";

class CombosController {
    constructor() {

    }

    static async create(req, res, next) {
        CombosServices.create(req, res, next)
    }

    static async getAll(req, res, next) {
        CombosServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        CombosServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        CombosServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        CombosServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        CombosServices.delete(req, res, next)
    }
}

export default CombosController