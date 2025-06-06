import mongoose from "mongoose"
import path from "path"
import fs from "fs"

class ServicesController {
    constructor(model) {
        this.model = model
        this.imageField = "imageSrc"
        this.imageFolder = "images"
    }

    async create(data, file) {
        if (file && file.filename) {
            data[this.imageField] = `${this.imageFolder}/${file.filename}`
        }

        return await this.model.create(data)
    }

    async getAll(req, res, next) {
        try {
            const registers = await this.model.find({})

            if (registers.length > 0) {
                return res.status(200).json(registers)
            }

            return res.status(404).json({
                message: "Nenhum registro encontrado."
            })

        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        const { id } = req.params

        try {
            if (id && mongoose.Types.ObjectId.isValid(id)) {
                const register = await this.model.findById(id)

                if (register) {
                    return res.status(200).json(register)
                }
            }

            return res.status(404).json({
                message: "Registro não encontrado."
            })

        } catch (error) {
            next(error)
        }
    }

    async getByParams(req, res, next) {
        const { params } = req.query

        try {
            // const search = await filterRequest(params)

            // req.result = this.model.find(search)

            return res.status(200).json(req.result)

        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            const registerUpdate = await this.model.findByIdAndUpdate(req.params.id, req.body)

            if (registerUpdate) {
                return res.status(200).json({
                    message: "Registro atualizado com sucesso."
                })
            }

            return res.status(404).json({
                message: "Registro não encontrado."
            })

        } catch (error) {
            next(error)
        }
    }

    async delete(id) {
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("ID inválido.")
        }

        const item = await this.model.findById(id)

        if (!item) {
            throw new Error("Registro não encontrado.")
        }

        const imagePath = item[this.imageField]

        if (imagePath) {
            const fullPath = path.resolve(`.${imagePath}`)

            try {
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath)
                }
            } catch (error) {
                console.warn("Erro ao deletar imagem:", error.message)
            }
        }

        await this.model.findByIdAndDelete(id)

        return true
    }
}

export default ServicesController