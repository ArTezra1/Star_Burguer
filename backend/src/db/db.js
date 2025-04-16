import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()

async function connectDB() {
    try {
        mongoose.connect(process.env.DATABASE_URL)
        console.log("Conectado ao banco de dados.")
    } catch (error) {
        throw error
    }

    return mongoose.connection
}

export default connectDB