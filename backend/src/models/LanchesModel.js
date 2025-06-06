import mongoose from "mongoose"

const LanchesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "Por favor insira o Nome do lanche!"]
    },
    sabor: {
        type: String,
        required: [true, "Por favor insira o Sabor do lanche!"]
    },
    ingredientes:{
        type: Array,
        required: [true, "Por favor insira os ingredientes do lanche."],
        min: [2, "O mínimo de ingredientes de um lanche deve ser 2."]
    },
    imageSrc:{
        type: String,
        required: [true, "Por favor insira a imagem do lanche."]
    },
    estoque:{
        type: Number,
        required: [true, "Por favor insira a quantidade estoque."],
        min: [0, "O estoque não pode ser negativo."]
    },
    preco_unitario: {
        type: Number,
        required: [true, "Por favor insira o Preço do lanche!"],
        min: [0, "O preço não pode ser negativo!"]
    }
}, {
    timestamps: true
})

const LanchesModel = mongoose.model("Lanches", LanchesSchema)

export default LanchesModel