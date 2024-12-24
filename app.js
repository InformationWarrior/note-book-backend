const connectDb = require('./db');
const express = require('express')
const app = express()

connectDb();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;