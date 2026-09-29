import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

connectDB();

app.get("/",(req,res) => {
    res.json({
        success: true,
        message: "Bakend server is running"
    })
})

app.get("/health",(req,res) => {
    res.status(200).json({
        success: true,
        message: "Server is Healthy"
    })
})

app.listen(PORT,() =>{
    console.log(`server running on https://localhost ${PORT}...`);
    
})