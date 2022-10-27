const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// middleware
// import the route
const postRoutes = require("./routes/posts");

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('i am on the homepage');
})


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected");
});

app.listen(3000);