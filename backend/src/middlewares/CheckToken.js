import jsonwebtoken from "jsonwebtoken"

export default function CheckToken(req, res, next){
    const token = req.header("Authorization")

    if(!token){
        return res.status(401).json({
            message: "Acesso negado: é preciso do token."
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