import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const PedidosSchema = new mongoose.Schema({
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clientes",
        autopopulate: { select: "nome telefone" }
    },
    enderecoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Enderecos",
        autopopulate: { select: "cep bairro rua numero complemento"  }
    },
    items: [
        {
            lanchesId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Lanches",
                autopopulate: { select: "nome" }
            },
            bebidasId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Bebidas",
                autopopulate: { select: "marca sabor tipo" }
            },
            combosId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Combos",
                autopopulate: { select: "nome tipo" }
            },
            quantidade: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: {
            values: ["Recebido", "Em preparo", "Pronto", "Saiu para a Entrega", "Entregue"],
            message: "O tipo de pedido {VALUE} não é permitido."
        },
        default: "Recebido"
    }
}, {
    timestamps: true
})

PedidosSchema.plugin(mongooseAutoPopulate)

const PedidosModel = mongoose.model("Pedidos", PedidosSchema)

export default PedidosModel