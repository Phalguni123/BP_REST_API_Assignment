const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use('/', require("./user-service"));

app.listen(3000, ()=>console.log("Express server is running at port no: 3000"));

