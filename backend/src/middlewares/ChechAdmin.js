export default function CheckAdmin(req, res, next){
    try {
        if(req.user){
            if(req.user.role !== "Admin"){
                return res.status(401).json({
                    message: "Acesso negado: apenas admins."
                })
            }
        }

        next()

    } catch (error) {
        next(error)
    }
}