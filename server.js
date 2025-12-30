const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://almukhammade_db_user:1HsHSZ8RcDJJ3tk3@cluster0.cedkqng.mongodb.net/Reja";

mongodb.connect(connectionString,
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    },
    (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
    module.exports = client;

const app = require("./app");
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(
        `The server is running successfuly om PORT: ${PORT}, http://localhost:${PORT}`
    );
});
}
    }
);

