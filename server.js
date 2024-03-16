import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"; 
//config env
dotenv.config();

//rest object
const app = express()

//database config
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get('/',(req,res) => {
    res.send("<h1>WELCOME TO ECOMMERCE APP</h1>")
})
//PORT
const PORT = process.env.PORT || 8090 ;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.devmode} mode on port ${PORT}`.bgCyan.white);
})