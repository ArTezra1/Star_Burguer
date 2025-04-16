import { Server } from "socket.io";
import PedidosController from "../controllers/PedidosController.js";

const initSocket = (server) =>{
    const io = new Server(server, {
        cors:{
            origin: process.env.CORS_ORIGIN || "*",
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"]
        }
    })

    io.on("connection", (socket)=>{
        console.log("Cliente conectado.")

        socket.on("change_status", async ({ pedidoId, novoStatus })=>{
            await PedidosController.update(pedidoId, {
                status: novoStatus
            })

            const pedido = await PedidosController.getAll()

            io.emit("request_updated", pedido)
        })

        socket.on("disconnect", ()=>{
            console.log("Cliente desconectado.")
        })

    })
}

export default initSocket