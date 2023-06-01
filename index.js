const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/token', require('./router'));

app.listen(3000, () => {
    console.log("server started running!");
})

module.exports.handler = serverless(app);