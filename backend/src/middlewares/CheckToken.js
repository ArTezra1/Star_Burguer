import jsonwebtoken from "jsonwebtoken"

export default function CheckToken(req, res, next){
    const header = req.header("Authorization")

    if(!header){
        return res.status(401).json({
            message: "Acesso negado: é preciso do token."
        })
    }

    const token = header.split(' ')[1]

    if (!token) {
        return res.status(401).json({
            message: "Token mal formatado."
        })
    }

    try {
     const decodificado = jsonwebtoken.verify(
        token,
        process.env.TOKEN_SECRET
     )

     req.user = decodificado
        
     next()

    } catch (error) {
        next(error)
    }
}