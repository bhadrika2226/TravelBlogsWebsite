const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Create a new blog post
router.post('/blogs', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new blog post' });
  }
});

// Get all blog posts
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('userId', 'username').populate('tags'); // Populate user and tags information
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve blog posts' });
  }
});

// Get a specific blog post by ID
router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('userId', 'username').populate('tags'); // Populate user and tags information
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the blog post' });
  }
});

// Update a specific blog post by ID
router.put('/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the blog post' });
  }
});

// Delete a specific blog post by ID
router.delete('/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(deletedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the blog post' });
  }
});

// Like a blog post
router.post('/blogs/:id/like', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Check if the user's ID is not already in the likes array
    if (!blog.likes.includes(req.body.userId)) {
      blog.likes.push(req.body.userId);
      await blog.save();
      res.json({ message: 'Liked the blog post' });
    } else {
      res.json({ message: 'You have already liked this blog post' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while liking the blog post' });
  }
});

module.exports = router;
