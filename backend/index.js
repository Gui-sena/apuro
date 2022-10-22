const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const studentRoutes = require('./routes/student');

const app = express();
const port = process.env.PORT || 9000;


// middleware
app.use(express.json());
app.use('/api', studentRoutes);


// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then( () => console.log("connected to mongodb atlas") )
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));