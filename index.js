// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');

const app = express();
const PORT = 3000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.status(200).send("Hello World!");
});

app.listen(PORT, () => console.log(`Music app listening on port ${PORT}!`));