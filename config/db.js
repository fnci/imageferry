import mongoose from "mongoose";
import { Schema } from "mongoose";

const db = async()=>{
    try {
        await mongoose.connect( process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
        process.exit(1);
    }
}

export default db;