import mongoose from "mongoose"

const ClienteSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true , "Por favor insira o nome correamente."],
    },
    email:{
        type: String,
        required: [true, "Por favor insira o email corretamente."],
        unique: [true, "Email já cadastrado."]
    },
    senha:{
        type: String,
        required: [true, "Por favor insira a senha corretamente."],
        minLength: [6, "A senha deve ter no mínimo 6 caracteres."],
        maXLength: [12, "A senha deve ter no máximo 12 caracteres."]
    },
    telefone:{
        type: String,
        required: [true, "Por favor insira o telefone corretamente."],
        minLength: [10, "O telefone deve ter no mínimo 10 caracteres."],
        maxLength: [11, "O telefone deve ter no máximo 11 caracteres."],
        default: ""
    },
    endereco:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enderecos",
        required: [true, "Por favor insira o endereço corretamente."],
        default: ""
    },
    role:{
        type: String,
        enum:{
            values: ["Cliente", "Admin"],
            message: "O cargo {VALUE} não é permitido."
        }, 
        default: "Cliente"
    }
},{
    timestamps: true
})

const ClientesModel = mongoose.model("Clientes", ClienteSchema)

export default ClientesModel