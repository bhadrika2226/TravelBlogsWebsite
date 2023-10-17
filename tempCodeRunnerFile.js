
require('dotenv').config({path:"./config.env"});
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const bodyParser = require('body-parser');
const path = require('path');

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
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Render the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog_post.html'));
});

// Handle form submission
// Handle form submission
app.post('/post-blog', upload.single('image'), (req, res) => {
    // Access form data
    console.log('req.body:', req.body);
    console.log('req.file:', req.file);

    // Access form data
   
    const state = req.body.state;
    const city = req.body.city;
    const description = req.body.description;
    const imageUrl = req.file.path; // URL of the uploaded image

    // Debugging - Check the value of imageUrl
    console.log('Image URL:', imageUrl);


    // You can save this data to a database or process it as needed
    // For now, we'll just send it back as a response
    res.send(`Name: ${name}<br>Email: ${email}<br>Password: ${password}<br>State: ${state}<br>City: ${city}<br>Description: ${description}<br>Image URL: ${imageUrl}`);
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


