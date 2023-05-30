import dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production'){
    dotenv.config({path: '.env'});
}
import express from 'express';
import db from './config/db.js'

const app = express();
db();
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`App connected to port: ${port}`);
})