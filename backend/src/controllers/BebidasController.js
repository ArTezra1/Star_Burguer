import BebidasServices from "../../services/BebidasServices.js";

class BebidasController {
    constructor() {

    }

    static async create(req, res, next) {
        try {
            const data = req.body
            const file = req.file

            if (!file) {
                throw new Error("Imagem não enviada.")
            }

            const result = await BebidasServices.create(data, file)

            res.status(201).json(result)

        } catch (error) {
            next(error)
        }
    }

    static async createVarios(req, res, next) {
        BebidasServices.createVarios(req, res, next)
    }

    static async getAll(req, res, next) {
        BebidasServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        BebidasServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        BebidasServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        BebidasServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params

            await BebidasServices.delete(id)

            res.status(200).send()

        } catch (error) {
            next(error)
        }
    }
}

export default BebidasController