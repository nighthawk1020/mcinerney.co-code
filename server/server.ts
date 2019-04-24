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

if (process.env.NODE_ENV !== "production") {
  app.use(express.static(__dirname + '../src'))
  app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../', 'src', 'index.html'));
  });    
} else {
  app.use(express.static('../build'));
  app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 8080;
app.listen(port, (err: Error) => {
    err ? console.log(err) : console.log(__dirname, 'server started on port: ' + port);
});

module.exports = app;