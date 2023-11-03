const express = require("express");

const dotenv = require("dotenv").config();
const app = express();
const port = process.env.port || 8080;
const server = app.listen(port, () =>{
    console.log("server is up on port", port)
} )
