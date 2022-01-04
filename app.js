const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Parse Middleware 
// Parse App 
app.use(bodyParser.urlencoded({ extended: false }));

// Parse App/json
app.use(bodyParser.json());

app.use(express.static('public'));



// Template Engine
app.engine('hbs',exphbs( {extname: '.hbs'}));
app.set('view engine','hbs');

// Router
app.get('',(res, req) => {
    res.render('home');
});

app.listen(port,() => console.log(`Listening on port ${port}`));