const express = require('express');
const userFile = require('../models/users.json');
const app = express();
const router = express.Router();


router.get('/user', (req, res) => {
    let givenID = req.query.uid;
    let response = {
        message: "No user found!"
    }
    userFile.map((user => {
        if(user.id == givenID){
            response = {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone
            }
        }
    })
    )
    res.send(response);
})

router.get('/users/:all', (req, res) => {
    let response = {
        message: "nothing to sort"
    };
    response = userFile.sort((a, b) => a.username.localeCompare(b.username));
    // response = userFile.map(user => user.username).sort();
    res.send(response);
})

app.use('/', router);
module.exports = app