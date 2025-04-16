import mongoose from "mongoose"

import { BaseErrorController, ErrorBadRequest, ErrorNotFound, ErrorUnauthorized, ErrorValidation } from "../errors/ErrorsController.js"

export default function errorRouter(error, req, res, next){
    if(error instanceof mongoose.Error.CastError){
        return new ErrorBadRequest().sendMessage(res)

    }else if(error instanceof mongoose.Error.ValidationError){
        return new ErrorValidation().sendMessage(res)

    }else if(error instanceof ErrorNotFound){
        return new ErrorNotFound().sendMessage(res)

    }else{
        return new BaseErrorController().sendMessage(res)
    }
}