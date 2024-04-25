const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
require('./db/connection');
const router = require("./router");
port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1",router);

app.use((req, res, next) => {
     next(new Error("Route not found!"));
   });

http.createServer(app).listen(port, () => {
    console.log("server is running on port " + port);
})