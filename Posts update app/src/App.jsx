import React, { useState, useEffect } from 'react';
import PostList from './PostList';  
import PostListAdmin from './PostListAdmin'; 
import Login from './Login';  

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false); 
    useEffect(() => {
    const storedAdminStatus = localStorage.getItem('isAdmin');
    if (storedAdminStatus === 'true') {
        setIsAdmin(true);
    }
    }, []);

    const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true'); 
    };

    const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin'); 
    };

    return (
    <div>
        <h1>Blog Posts</h1>
        <PostList />
        {isAdmin ? (
        <>
            <PostListAdmin />
            <button onClick={handleLogout}>Logout</button>  
        </>
        ) : (
        <Login onLogin={handleLogin} />
        )}
    </div>
    );
};

export default App;