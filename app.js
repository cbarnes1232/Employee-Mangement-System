// const hbs = require('hbs');
const express = require('express');
 const exphbs = require('express-handlebars');

const hbs = exphbs.create({});
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
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');

// Router 
app.get('/',(req,res)=> {
    res.render('home');
});

app.listen(port,() => console.log(`Listening on port ${port}`));