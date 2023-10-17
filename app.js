const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();

const path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const blog= require("./routes/blogRoute");


app.use("/api/v1", blog);
router.get('/',(req,res) => {
    res.send("All blogs");
    // const filepath = 'D:/CSE SEM-5/BWP Project/TravelBlog/public/blog_post.html'
    // res.render(filepath);
    // res.sendFile(path.join(__dirname,'blog_post.html'));
})

module.exports=app;




