const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const name = req.query.name;
    const mail = req.query.mail;
    const date = {
        title: 'Hello!',
        content: 'あなたの名前は、' + name + '。<br>' +
                'メールアドレスは、' + mail + 'です。'
    };
    res.render('hello', date);
});

module.exports = router;