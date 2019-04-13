const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    console.log('got request: ', req);
    res.sendFile(path.join(__dirname, 'index.html'));
});
const port = process.env.PORT | 8080;
app.listen(port, (err) => {
    err ? console.log(err) : console.log('server started on port: ' + port);
});
