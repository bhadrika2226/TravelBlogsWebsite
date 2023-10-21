const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
// const corsMiddleware = require('./middlewares/middleware'); // Import the CORS middleware
// const { createProxyMiddleware } = require('http-proxy-middleware'); // Import the reverse proxy middleware

// Use the CORS middleware for all routes
// app.use(corsMiddleware);
// app.use('/public', createProxyMiddleware({ target: 'http://localhost:5500', changeOrigin: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', req.headers.origin);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     if (req.method === 'OPTIONS') {
//       return res.sendStatus(204); // Handle preflight requests properly
//     }
//     next();
//   });
  

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/user_registration.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/user_login.html'));
});

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/success.html'));
});

const blog= require("./routes/blogRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", blog);
app.use("/api/v1",user);
// router.get('/',(req,res) => {
//     res.send("All blogs");
//     // const filepath = 'D:/CSE SEM-5/BWP Project/TravelBlog/public/blog_post.html'
//     // res.render(filepath);
//     // res.sendFile(path.join(__dirname,'blog_post.html'));
// })
module.exports=app;






