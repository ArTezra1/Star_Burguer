import express from "express"
import Router from "./src/routes/index.js"
import connectDB from "./src/db/db.js"
import http from "http"
import cors from "cors"
import initSocket from "./src/events/PedidosEvento.js"

const app = express()
const server = http.createServer(app)
initSocket(server)

app.use(cors())
app.use(express.json())

Router(app)

connectDB()

server.listen(4000, ()=>{
    console.log("Servidor rodando na porta 4000")
})