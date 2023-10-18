const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const blog= require("./routes/blogRoute");
const destination=require("./routes/destinationRoute");

app.use("/api/v1", blog);
app.use("/api/v1",destination);

router.get('/',(req,res) => {
    res.send("All blogs");
    // const filepath = 'D:/CSE SEM-5/BWP Project/TravelBlog/public/blog_post.html'
    // res.render(filepath);
    // res.sendFile(path.join(__dirname,'blog_post.html'));
})



module.exports=app;




