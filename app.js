const express = require("express");
const app = express();

// middleware

app.get('/', (req, res) => {
    res.send('i am on the homepage');
})

app.get('/post', (req, res) => {
    res.send('i am making a post');
})

app.listen(3000);