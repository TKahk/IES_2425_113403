import React, { useState, useEffect } from 'react';
import './App.css';

const Post = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);  // Define state for posts

    const addPosts = async (title, body) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: Math.random().toString(36).slice(2),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setPosts((posts) => [data, ...posts]);  // Add new post to posts state
                setTitle('');  // Reset title
                setBody('');   // Reset body
            } else {
                console.error("Failed to add post");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body) {
            addPosts(title, body);
        } else {
            console.log("Title and body are required to add a post");
        }
    };

    return (
        <div className="app">
            <div className="add-post-container">
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Post Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="form-control"
                        placeholder="Post Body"
                        cols="10"
                        rows="8"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <button type="submit">Add Post</button>
                </form>
            </div>
            <div className="posts-container">
                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
