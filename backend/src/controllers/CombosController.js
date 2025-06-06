import CombosServices from "../../services/CombosServices.js";

class CombosController {
    constructor() {

    }

    static async create(req, res, next) {
        try {
            const data = req.body
            const file = req.file

            if (!file) {
                throw new Error("Imagem não enviada.")
            }

            const result = await CombosServices.create(data, file)

            res.status(201).json(result)

        } catch (error) {
            next(error)
        }
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
        try {
            const { id } = req.params

            await BebidasServices.delete(id)

            res.status(200).send()

        } catch (error) {
            next(error)
        }
    }
}

export default CombosController