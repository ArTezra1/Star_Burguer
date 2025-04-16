class BaseErrorController extends Error{
    constructor(message = "Erro no servidor.", status = 500){
        super()
        this.message = message
        this.status = status
    }

    sendMessage(res){
        return res.status(this.status).json({
            message: this.message,
            status: this.status
        })
    }
}

class ErrorNotFound extends BaseErrorController{
    constructor(message = "Erro: Dado não encontrado"){
        super(message, 404)
    }
}

class ErrorBadRequest extends BaseErrorController{
    constructor(message = "Erro na requisição, insira os dados corretos."){
        super(message, 400)
    }
}

class ErrorUnauthorized extends BaseErrorController{
    constructor(message = "Erro: Acesso negado, falta de autorização."){
        super(message, 403)
    }
}

class ErrorValidation extends BaseErrorController{
    constructor(erro){
        const mensagemErro = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ")
        super(`Os seguintes erros foram encontrados: ${mensagemErro}`, 422)
    }
}

export { BaseErrorController,ErrorBadRequest, ErrorNotFound, ErrorUnauthorized, ErrorValidation }