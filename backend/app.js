import express from "express"
import https2 from "http2"
import path from "path"
import fs from "fs"
import cors from "cors"
import { configDotenv } from "dotenv"

configDotenv()

const app = express()

app.use(express.json())

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.listen(4000, ()=>{
    console.log("Servidor rodando na porta 4000")
})