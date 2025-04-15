import clientes from "./ClientesRouter.js"
import Lanches from "./LanchesRouter.js"
import Bebidas from "./BebidasRouter.js"
import Combos from "./CombosRouter.js"
import Enderecos from "./EnderecosRouter.js"
import Pedidos from "./PedidosRouter.js"

const Routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
  
    app.use(clientes, Lanches, Bebidas, Combos, Enderecos, Pedidos);
};

export default Routes