const express = require('express');
const router = express.Router();
const {createBlog, updateBlog,deleteBlogId,retrieveAllBlog, retrieveBlogbyId} = require('../controller/blogController'); // Import the blog controller


router.post('/createBlog', createBlog);

router.get('/updateBlog/:id', updateBlog);

router.get('/deleteBlogId/:id', deleteBlogId);

router.patch('/retrieveAllBlog' ,retrieveAllBlog);


router.delete('/retrieveBlogId/:id', retrieveBlogbyId);

module.exports = router;
