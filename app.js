// 1. import express
const express = require("express");

// 2. init express
const app = express();

//config public folder for static files
app.use(express.static("public"));

// console.log(__dirname);

// 3. listen request

app.get("/", (req,res) => {
    // return what requested us
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/views/about.html")
});

app.get("/works", (req,res) => {
    res.sendFile(__dirname + "/views/works.html")
});

// 4. Set the server port 

app.listen(3000, () => {
    console.log("server port 3000 turned on")
});
