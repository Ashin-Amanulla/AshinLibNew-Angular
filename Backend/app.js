const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt= require('jsonwebtoken');
let app = express();

const port = process.env.PORT || 8887;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); //middleware portion for adding data
app.use(cors());

app.use(session({      //session creation
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(bodyParser.json({
    limit: '1mb',
    cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '1mb',
    parameterLimit: 50000
}));



const login = require('./routes/login'); //login page
app.use('/login', login);

app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

// var authenticate = function (req, res, next) {  //admin or user
//     if (req.session.role == 'admin' || req.session.role == 'user') {
//         next();
//     } else {
//         res.redirect('/login');
//     }

// }

// app.use(authenticate);
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    req.role = 'admin'
    next()
}


const home = require('./routes/home'); //homepage
app.use('/', home);

const group = require('./routes/group'); //books and author group page
app.use('/group', group);

const add = require('./routes/addform'); //add book and add author page
app.use('/add', add);




app.listen(port, () => {
    console.log("Server ready at" + port)
});
