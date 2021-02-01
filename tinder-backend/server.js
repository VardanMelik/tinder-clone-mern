const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const card = require('./cardsModel');
const cardsModel = require('./cardsModel');

// App Config
const app = express();
const port = process.env.PORT || 8001;
const db_url = "mongodb+srv://tinder_admin_access:xBhod72F9tBZyDaJ@cluster0.fl7t6.mongodb.net/tinderdb?retryWrites=true&w=majority"


// Add headers
app.use(cors())
/*app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/


// Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// DB
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then( () => { console.log('Database connection done')})
.catch( error => { console.log('Please check connection: ' + error)})

// API Endpoints
app.get('/', (req, res) => {
    res.json('Hello');
})

app.get('/tinder/cards', (req, res) => {
    cardsModel.find({})
    .then( data => res.json(data))
    .catch( error => console.log(error))
})

app.post('/', (req, res) => {
    const dbCard = req.body;
    card.create(dbCard)
        .then(response => res.json(response))
        .catch( error => console.log('Create post: ' + error));
})

// Listener
app.listen(port, () => {
    console.log(`Server is running: ${port}`);
})