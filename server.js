const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connected");
})

const productsRouter = require("./routes/productsRoute.js");
app.use("/products",productsRouter);
app.get("/", (req,res)=>{
    res.json("Hello world from Docker");
})

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
})
