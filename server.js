
require('dotenv').config();
const express = require('express');
const app=require("./app");
const mongoose = require('mongoose');
// const session = require("express-session");
// const path = require("path");
// const app = express();
const PORT = process.env.PORT || 4000;

// //middlewares
// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

// app.use(session({
//   secret: 'my secrte key',
//   saveUninitialized: true,
//   resave:false
// }));

// app.use((req,res,next) => {
//   res.locals.message = req.session.message;
//   delete req.session.message;
//   next();
// })

//For hTML files
// app.use(express.static(path.join(__dirname,'public')));

//set template engine
// app.set('view engine','ejs');

//route prefix


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});


const dbUrl = process.env.DB_URI;

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


