const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.send('i am making a post');
})

router.get('/anotherpost', (req, res) => {
    res.send("i am making another post");
})

module.exports = router;