const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let msg = '何か書いてください!!';
    if (req.session.message != undefined) {
        msg = "Last Message: " + req.session.message;
    }
    let data = {
        title: 'Hello!',
        content: msg
    };
    res.render('hello', data);
});

router.post('/post', (req, res, next) => {
    let msg = req.body['message'];
    req.session.message = msg;
    let data = {
        title: 'Hello　post!',
        content: 'Last Message: ' + req.session.message
    };
    res.render('hello', data);
});

module.exports = router;