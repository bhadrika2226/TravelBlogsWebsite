const express = require('express');
const router = express.Router();
const {create} = require('../controller/blogController'); // Import the blog controller

// Create a new blog post
router.post('/create', create);

// // Retrieve all blog posts
// router.get('/all', blogController.getAll);

// // Retrieve a specific blog post by ID
// router.get('/:id', blogController.getOne);

// // Update a specific blog post by ID
// router.patch('/update/:id', blogController.update);

// // Delete a specific blog post by ID
// router.delete('/delete/:id', blogController.delete);

module.exports = router;
