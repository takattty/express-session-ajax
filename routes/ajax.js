const express = require('express');
const router = express.Router();

const data = [
    { name:'taka', age:21, form:'okinawa'},
    { name:'yu', age:23, form:'tokyo'},
    { name:'mina', age:22, form:'hyogo'}
];

router.get('/', (req, res, next) => {
    const n = req.query.id;
    res.json(data[n]);
})

module.exports = router;