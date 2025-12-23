console.log("Hello, Plan A!");
const express = require("express");
const app = express();
const http = require("http");


// 1 Kirish code 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2:Session

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routes cODE 
app.get("/plan", function (req, res){
    res.end("<h1 style=\"background:red\"> Welcome to Plan A</h1>");
});

app.get("/sabr", function (req, res){
    res.end("<h1 style=\"background:blue\"> Mashaqqat qilamiz</h1>");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`The server is running successfuly om PORT: ${PORT}`);
});