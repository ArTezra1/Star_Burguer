import PedidosServices from "../../services/PedidosServices.js";

class PedidosController {
    constructor() {

    }

    static async create(req, res, next) {
        PedidosServices.create(req, res, next)
    }

    static async getAll(req, res, next) {
        PedidosServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        PedidosServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        PedidosServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        PedidosServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        PedidosServices.delete(req, res, next)
    }
}

export default PedidosController