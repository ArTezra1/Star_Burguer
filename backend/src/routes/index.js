import clientes from "./ClientesRouter.js"

const Routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
  
    app.use(clientes);
};

export default Routes