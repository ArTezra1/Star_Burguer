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
        required: true,
        ref: "Enderecos",
        autopopulate: { select: "cep bairro rua numero complemento"  }
    },
    items: [
        {
            lancheId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Lanches",
                autopopulate: { select: "nome" }
            },
            bebidaId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Bebidas",
                autopopulate: { select: "marca sabor tipo" }
            },
            comboId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Combos",
                autopopulate: { select: "nome tipo" }
            },
            nome: {
                type: String,
                required: true
            },
            quantidade: {
                type: Number,
                required: true,
                min: 1
            },
            preco_unitario: {
                type: Number,
                required: true
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