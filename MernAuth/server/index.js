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

const AddCSSRoutes = require('./routes/addCSS');
const getCSSRoutes = require('./routes/getCSS');

const AddJSRoutes = require('./routes/addJS');
const getJSRoutes = require('./routes/getJS');

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
app.use('/api/CSSG', AddCSSRoutes);
app.use('/api/JSG', AddJSRoutes);

app.use('/api/getHTMLG', gethtmlRoutes);
app.use('/api/getCSSG', getCSSRoutes);
app.use('/api/getJSG', getJSRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on port ' + port));
