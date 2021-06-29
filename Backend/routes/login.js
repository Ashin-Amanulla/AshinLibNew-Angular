const express = require('express');
let app = express.Router();
const cors = require('cors');


const SignUpData = require('../model/signupdata');




//signin mongo check up and admin validation

// app.get('/', function (req, res) {
//     res.render('login');
// });

//postlogin mongo validation

app.post('/', function (req, res) {

    console.log(req.body,"aaff");
    let username = req.body.username;
    let password = req.body.password;

    // mongo check for user
    if (username == 'admin' && password == '1234') {
        req.session.role = 'admin';
        console.log("admin login success")
        let token = jwt.sign(payload,'secretKey')
        res.send({ status: true });

    } else {
        SignUpData.findOne({ Username: username, Password: password }, function (err, user) {
            if (err) {
                res.send({ status: false, data: 'Response error. No Internet' });

            }
            

            else if (user) {
                let payload={subject:username+password}
                let token = jwt.sign(payload,'secretKey')
                req.session.role = 'user';
                res.send({ status: true, token });
            } else {
                res.send({ status: false, data: 'NOT FOUND' });
            }
            console.log("user data", user)


        });
    }
});

//signup data insert to mongo db

app.post('/signup', function (req, res) {

    console.log(req.body)
    var signup = SignUpData(req.body);
    signup.save().then(function (data) {
        console.log('data added', data);
        res.send({ status: true });
    }).catch(function (error) {
        console.log('error added', error);
        res.send({ status: false, data: 'Unexpected Error' });
    })

    //ends

});

module.exports = app;