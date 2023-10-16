const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel'); // Import the Blog model

// Create a new blog post
exports.createBlog=async (req, res) => {
  try {
    const { blogId, userId,bState,bCity,title,content,tag,date,blogImg } = req.body;
    const newBlog = new Blog({
      blogId,
      userId,
      bState,
      bCity,  
      title,
      content,
      tag,
      date,
      blogImg
    });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve all blog posts
exports.retrieveAllBlog= async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve a specific blog post by ID
exports.retrieveBlogbyId= async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a specific blog post by ID
exports.updateBlog= async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a specific blog post by ID
exports.deleteBlogId= async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndRemove(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(deletedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// module.exports = router;
