import mongoose from "mongoose";

const ImagensSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, "Por favor insira o nome da imagem."]
    },
    src:{
        type: String,
        required: [true, "Por favor insira o caminho da imagem."]
    },
    alt:{
        type: String,
    },
    produto:{
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        type:{
            type: String,
            required: [true, "Por favor insira o tipo do produto."],
            enum: ["Lanches", "Bebidas", "Combos"]
        }
    }
},{

})

const ImagensModel = mongoose.model("Imagens", ImagensSchema)

export default ImagensModel