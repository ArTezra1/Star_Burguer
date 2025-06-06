import LanchesServices from "../../services/LanchesServices.js"

class LanchesController {
    constructor() {

    }

    static async create(req, res, next) {
        try {
            const data = req.body
            const file = req.file

            if (!file) {
                throw new Error("Imagem não enviada.")
            }

            const result = await LanchesServices.create(data, file)

            res.status(201).json(result)

        } catch (error) {
            next(error)
        }
    }

    static async getAll(req, res, next) {
        LanchesServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        LanchesServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        LanchesServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        LanchesServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params

            await LanchesServices.delete(id)

            res.status(200).send()

        } catch (error) {
            next(error)
        }
    }
}

export default LanchesController