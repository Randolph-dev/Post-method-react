import { useEffect, useState } from 'react';
import axios from 'axios';  

const PostList = () => {
    const [posts, setPosts] = useState([]); 

    const togglePublished = (id, currentStatus) => {
    setPosts(posts.map(post => 
    post.id === id ? { ...post, published: !currentStatus } : post
    ));

    axios.put(`http://localhost:3002/posts/${id}`, { published: !currentStatus })
        .catch(error => {
        console.error('Error updating post:', error);
        setPosts(posts.map(post =>
            post.id === id ? { ...post, published: currentStatus } : post
        ));
        });
    };

    useEffect(() => {
    axios.get('http://localhost:3002/posts')
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('Error fetching posts:', error));
  }, []); // Empty dependency array means it runs once when the component is set up

    return (
    <div>
        {posts.map(post => (
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <p>{post.content}</p>
            <p>Published: {post.published ? 'Yes' : 'No'}</p>
            <button onClick={() => togglePublished(post.id, post.published)}>
            Toggle Published
            </button>
        </div>
        ))}
    </div>
    );
};

export default PostList;