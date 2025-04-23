import ImagensServices from "../../services/ImagensServices.js";

class ImagensController extends ImagensServices {
    constructor() {

    }

    static async createImage(req, res, next) {
        await ImagensServices.createImage(req, res, next)
    }

    static async getAll(req, res, next) {
        await ImagensServices.getAll(req, res, next)
    }

    static async getById(req, res, next) {
        await ImagensServices.getById(req, res, next)
    }

    static async getByParams(req, res, next) {
        await ImagensServices.getByParams(req, res, next)
    }

    static async update(req, res, next) {
        await ImagensServices.update(req, res, next)
    }

    static async delete(req, res, next) {
        await ImagensServices.delete(req, res, next)
    }
}

export default ImagensController