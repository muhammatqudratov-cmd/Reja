console.log("Hello, Plan A!");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err){
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});


// 1 Kirish code 
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2:Session

// 3 Views code
// const path = require("path");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.set("views", "views");
app.set("view engine", "ejs"); 

// 4 Routes cODE 
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});

app.get(`/`, function (req, res){
    res.render("harid")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`The server is running successfuly om PORT: ${PORT}`);
});