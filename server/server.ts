import { Request, Response } from "express";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('../build'));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});
const port = process.env.PORT || 8080;
app.listen(port, (err: Error) => {
    err ? console.log(err) : console.log(__dirname, 'server started on port: ' + port);
});

module.exports = app;