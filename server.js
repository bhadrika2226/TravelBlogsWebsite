
require('dotenv').config({path:"./config.env"});
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const bodyParser = require('body-parser');
const path = require('path');

// ...

const app = express();

cloudinary.config({ 
  cloud_name: 'dkp6k4dhd', 
  api_key: '552871919166496', 
  api_secret: 'OI0jQ8CDRBlMhCuq9TqMvCd5WHQ' 
});

// Set up Multer and Cloudinary storage
const storage = new CloudinaryStorage({
   
    cloudinary: cloudinary,
    params: {
        folder: 'assets', // Specify the folder where images will be stored on Cloudinary
        allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
    },
});

const upload = multer({ storage: storage });

// Serve static files (e.g., images)
app.use(express.static(path.join(__dirname, 'frontend')));

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));


// Render the HTML form
app.get('/post-blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/blog_post.html'));
});



const blogSchema = new mongoose.Schema({
  title: String,
  state: String,
  city: String,
  description: String,
  image : String,
  d: Date,
});

const Blog = mongoose.model('Blog', blogSchema);
app.post('/post-blog', upload.single('image'), (req, res) => {
    // Access form data
    console.log('req.body:', req.body);
    console.log('req.file:', req.file);


    // Access form data
    const title = req.body.title;
    const state = req.body.state;
    const city = req.body.city;
    const d = req.body.d;
    const description = req.body.description;
    const imageUrl = req.file.path; // URL of the uploaded image


    const newBlog = new Blog({
      title: title,
      d: d,
      // Add other fields as needed
    });
  
    // Save the newBlog instance to MongoDB
    newBlog.save()
      .then((result) => {
        console.log('Blog post saved to MongoDB:', result);
        res.send('Blog post saved to MongoDB');
      })
      .catch((error) => {
        console.error('Error saving blog post:', error);
        res.status(500).send('Error saving blog post');
      });
  
  

    // Debugging - Check the value of imageUrl
    console.log('Image URL:', imageUrl);


    // You can save this data to a database or process it as needed
    // For now, we'll just send it back as a response
});


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

//DATABASE CONNECTION
const dbUrl = process.env.DB_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(dbUrl,connectionParams)
  .then(() => {
    console.info("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:",e);
  });


