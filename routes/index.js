const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Home route
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ created_at: -1 });
    res.render('index', { posts });
});

// New post form
router.get('/posts/new', (req, res) => {
    res.render('new-post');
});

// Create new post
router.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.redirect('/');
});

// View single post
router.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
});

module.exports = router;
