require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/adminRoutes');
const AddhtmlRoutes = require('./routes/addhtml');
const gethtmlRoutes = require('./routes/gethtml');

//DB connection

connection();

///////// middlewares

app.use(express.json());
app.use(cors());

///// routs

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/HTMLG', AddhtmlRoutes);
app.use('/api/getHTMLG', gethtmlRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on port ' + port));
