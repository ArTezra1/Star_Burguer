import ServicesController from "./ServicesController.js";
import ClientesModel from "../src/models/ClientesModel.js";

import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

class ClientesServices extends ServicesController {
    constructor() {
        super(ClientesModel)
    }

    async login(req, res, next){
        try {
            const { email, senha } = req.body

            if(email && senha){
                const user = await ClientesModel.findOne({
                    email
                })

                if(!user){
                    return res.status(401).json({
                        message: "Email inválido."
                    })
                }

                const validPassword = bcrypt.compare(senha, user.senha)

                if(!validPassword){
                    return res.status(401).json({
                        message: "Senha incorreta"
                    })
                }

                const token = jsonwebtoken.sign(
                    {
                        id: user._id, role: user.role
                    },
                    process.env.TOKEN_SECRET,
                    {expiresIn: "1h"}
                )

                return res.json({
                    token,
                    user:{
                        nome: user.nome,
                        role: user.role
                    }
                })

            } else{
                return res.status(422).json({
                    message: "Por favor preencha os campos corretamente."
                })
            }


        } catch (error) {
            next(error)
        }
    }

    async signUp(req, res, next){
        try {
            const { senha, ...dataClient } = req.body

            if(!senha){
                return res.status(400).json({
                    message: "A senha é obrigatória"
                })
            }

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(senha, salt)

            const client = await ClientesModel.create({
                ...dataClient, senha: hashPassword
            })

            return res.status(201).json({
                message: "Cliente criado com sucesso",
                cliente:{
                    nome: client.nome,
                    email: client.email
                }
            })

        } catch (error) {
            console.log("erro ao criar cliente", error)
            next(error)
        }
    }

}

export default new ClientesServices()