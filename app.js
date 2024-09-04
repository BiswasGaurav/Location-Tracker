const express = require("express");
const path = require('path');
const app = express(); 


const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);

const io = socketio(server)

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(3000);