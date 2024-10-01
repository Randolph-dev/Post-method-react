import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostListAdmin = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const interval = setInterval(() => {
        axios.get('http://localhost:3002/posts')
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, 1000);

    return () => clearInterval(interval);  
    }, []);

    return (
    <div>
        <h2>Admin Panel: Real-Time Data from Backend</h2>
        <pre>{JSON.stringify(posts, null, 2)}</pre> 
    </div>
    );
};

export default PostListAdmin;