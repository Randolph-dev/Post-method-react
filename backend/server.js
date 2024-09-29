const express = require('express');
const fs = require('fs');
const cors = require('cors'); 
const path = require('path');
const app = express();

// This right here is to enable CORS for all requests
app.use(cors());

// And this is the middleware to parse JSON bodies
app.use(express.json());

app.get('/posts', (req, res) => {
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    const posts = JSON.parse(data).posts;
    res.json(posts);
    });
});

app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const { published } = req.body;

    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
        return res.status(500).json({ error: 'Failed to read data' });
    }

    let db = JSON.parse(data);
    let post = db.posts.find(p => p.id === postId);

    if (post) {
        post.published = published;

        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save data' });
        }
        res.json(post);
        });
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
    });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});