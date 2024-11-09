import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Axios = () => {

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const client = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
    });

    // Get posts from API
    const GetRequest = async () => {
        try {
            const response = await client.get();
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    // Post a new post
    const PostRequest = async (title, body) => {
        try {
            const response = await client.post('', {
                title: title,
                body: body,
            });
            // Add the new post to the beginning of the posts array
            setPosts((prevPosts) => [response.data, ...prevPosts]);
            setTitle(''); // Clear input fields
            setBody('');
        } catch (error) {
            console.error('Error posting new data:', error);
        }
    };

    // Delete a post
    const DeleteRequest = async (id) => {
        try {
            await client.delete(`${id}`);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        PostRequest(title, body); // Create the post
    };

    // Fetch posts when the component mounts
    useEffect(() => {
        GetRequest(); // Load posts on mount
    }, []);

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
                        <h3 className="post-id">Post ID: {post.id}</h3>
                        <p className="post-body">{post.body}</p>
                        <div className="button">
                            <div className="delete-btn" onClick={() => DeleteRequest(post.id)}>
                                Delete
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Axios;
