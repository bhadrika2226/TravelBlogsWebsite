const Blog = require('../models/blog'); // Import the Blog model

// Create a new blog post
exports.createBlog = (req, res) => {
  const { userId, title, state, city, date, bImg, description, tags } = req.body;

  const newBlog = new Blog({
    userId,
    title,
    state,
    city,
    date,
    bImg,
    description,
    tags,
  });

  newBlog
    .save()
    .then((blog) => {
      res.status(201).json(blog);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Get all blog posts
exports.getAllBlogs = (req, res) => {
  Blog.find()
    .populate('userId', 'username') // Populate the 'userId' field with the 'username'
    .exec()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Get a single blog post by ID
exports.getBlogById = (req, res) => {
  const blogId = req.params.id;

  Blog.findById(blogId)
    .populate('userId', 'username') // Populate the 'userId' field with the 'username'
    .exec()
    .then((blog) => {
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.status(200).json(blog);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Update a blog post by ID
exports.updateBlog = (req, res) => {
  const blogId = req.params.id;
  const updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Blog.findByIdAndUpdate(blogId, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({ message: 'Blog updated' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Delete a blog post by ID
exports.deleteBlog = (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndRemove(blogId)
    .exec()
    .then((result) => {
      res.status(200).json({ message: 'Blog deleted' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};
