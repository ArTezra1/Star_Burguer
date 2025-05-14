import ServicesController from "./ServicesController.js";
import BebidasModel from "../src/models/BebidasModel.js"

class BebidasServices extends ServicesController{
    constructor(){
        super(BebidasModel)
    }
    
    async createVarios(req, res, next){
        try {
            const insertMany = await BebidasModel.insertMany(
                [
                    {
                      "nome": "Clássica da Casa",
                      "marca": "Essencial",
                      "sabor": "sem gás",
                      "tipo": "agua",
                      "estoque": 10,
                      "preco_unitario": 4.50
                    },
                    {
                      "nome": "Espuma Natural",
                      "marca": "Essencial",
                      "sabor": "com gás leve",
                      "tipo": "agua",
                      "estoque": 10,
                      "preco_unitario": 5.50
                    },
                    {
                      "nome": "Limão do Deserto",
                      "marca": "Star Exotic",
                      "sabor": "limão com toque de cacto",
                      "tipo": "suco",
                      "estoque": 10,
                      "preco_unitario": 11.00
                    },
                    {
                      "nome": "Refresco da Serra",
                      "marca": "Natural Vibe",
                      "sabor": "maçã verde com hortelã",
                      "tipo": "suco",
                      "estoque": 10,
                      "preco_unitario": 9.00
                    },
                    {
                      "nome": "Brisa de Outono",
                      "marca": "Star Drink",
                      "sabor": "chá gelado de pêssego com limão",
                      "tipo": "suco",
                      "estoque": 10,
                      "preco_unitario": 8.50
                    },
                    {
                      "nome": "Raio de Laranja",
                      "marca": "Cítrico Puro",
                      "sabor": "laranja natural com toque de gengibre",
                      "tipo": "suco",
                      "estoque": 10,
                      "preco_unitario": 9.50
                    },
                    {
                      "nome": "Zero Classic",
                      "marca": "Retro Cola",
                      "sabor": "cola zero açúcar",
                      "tipo": "refrigerante",
                      "estoque": 10,
                      "preco_unitario": 7.00
                    },
                    {
                      "nome": "Original Cola",
                      "marca": "Retro Cola",
                      "sabor": "cola tradicional",
                      "tipo": "refrigerante",
                      "estoque": 10,
                      "preco_unitario": 7.50
                    },
                    {
                      "nome": "Tropical Hit",
                      "marca": "Star Sparkle",
                      "sabor": "abacaxi com gás leve",
                      "tipo": "refrigerante",
                      "estoque": 10,
                      "preco_unitario": 9.00
                    },
                    {
                      "nome": "Berry Fresh",
                      "marca": "Star Juice",
                      "sabor": "framboesa com limão",
                      "tipo": "suco",
                      "estoque": 10,
                      "preco_unitario": 10.50
                    },
                    {
                      "nome": "Verde Vital",
                      "marca": "Natural Vibe",
                      "sabor": "couve com maçã e hortelã",
                      "tipo": "suco",
                      "estoque": 10,
                      "preco_unitario": 9.80
                    },
                    {
                      "nome": "Gás de Maracujá",
                      "marca": "Star Sparkle",
                      "sabor": "maracujá gaseificado",
                      "tipo": "refrigerante",
                      "estoque": 10,
                      "preco_unitario": 8.00
                    }
                ]
            )

            if(insertMany){
                return res.status(201).json({
                    message: "registros criados com sucesso"
                })
            }

        } catch (error) {
            next(error)
        }
    }

}

export default new BebidasServices()