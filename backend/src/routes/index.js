import clientes from "./ClientesRouter.js";

const Router = (app) =>{
    app.use("/api", ()=>{
        res.status(200).send("api rodando")
    }, clientes)
}

export default Router