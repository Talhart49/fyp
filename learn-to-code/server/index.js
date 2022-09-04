require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const addHTML = require('./routes/addhtml');
const getHTML = require('./routes/gethtml');

//DB connection

connection();

///////// middlewares

app.use(express.json());
app.use(cors());

///// routs

app.use('/api/addhtmlschemas', addHTML);
app.use('/api/gethtmlschemas', getHTML);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on port ' + port));
