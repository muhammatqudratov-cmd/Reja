const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://almukhammade_db_user:y95EHC5bV7jLmceL@cluster0.cedkqng.mongodb.net/Reja";

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
let PORT = 4004;
server.listen(PORT, function (){
    console.log(
        `The server is running successfuly om PORT: ${PORT}, http://localhost:${PORT}`
    );
});
}
    }
);

