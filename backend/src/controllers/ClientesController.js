import ClientesServices from "../../services/ClientesServices.js";

class ClientesController {
    constructor() {

    }

    static async signUp(req, res, next) {
        await ClientesServices.signUp(req, res, next)
    }

    static async login(req, res, next) {
        await ClientesServices.login(req, res, next)
    }

    static async getAll(req, res, next) {
        await ClientesServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        await ClientesServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        await ClientesServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        await ClientesServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        await ClientesServices.delete(req, res, next)
    }

}

export default ClientesController