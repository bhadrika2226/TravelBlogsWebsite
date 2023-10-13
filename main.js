
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");

const app = express();
const PORT = 5000 || 4000;

app.get('/',(req,res) => {
    res.send("Hello Word");
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

// const mongoose = require("mongoose")

const dbUrl = "mongodb+srv://urja:1234@cluster0.er9az50.mongodb.net/?retryWrites=true&w=majority"

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose
  .connect(dbUrl,connectionParams)
  .then(() => {
    console.info("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:",e);
  });

