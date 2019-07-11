const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const name = req.query.name;
    const mail = req.query.mail;
    const data = {
        title: 'Hello!',
        content: '何か書いて送信して下さい。'
    };
    res.render('hello', data);
});

router.post('/post', (req, res, next) => {
    const msg = req.body['message'];
    const data = {
        title: 'Hello!',
        content: 'あなたは、「' + msg + '」と送りました。'
    };
    res.render('hello', data);
});

module.exports = router;