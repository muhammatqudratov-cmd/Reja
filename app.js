console.log("Hello, Plan A!");
const express = require("express");
const app = express();

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
// MongoDB call
const db = require ("./server").db();

// 1 Kirish code 
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2:Session

// 3 Views code

app.set("views", "views");
app.set("view engine", "ejs"); 

// 4 Routes cODE 
app.post("/create-item", (req, res) => {
        console.log('user entered /create-item');
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if (err) {
            res.end("someting went wrong");
        } else {
            res.end("successfully added");
        }
    });
});

// app.get("/author", (req, res) => {
//     res.render("author", {user: user});
// });

app.get(`/`, function (req, res){
    console.log('user entered /');
    db.collection("plans").find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
          res.render("reja", {item: data});
        }
    });
});

module.exports = app;  