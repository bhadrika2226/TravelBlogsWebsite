const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'user_login.html'));
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




