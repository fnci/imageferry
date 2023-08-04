import dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production'){
    dotenv.config({path: '.env'});
}
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import db from "./config/db.js";
import User from "./models/User.js";
import router from "./routes/routes.js";




const app = express();
app.use(express.json());

db();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Routing
app.use('/', router());
// Read body values

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`App connected to port: ${port}`);
});