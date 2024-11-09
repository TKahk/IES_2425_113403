import React, { useState, useEffect } from "react";
import "./App.css";

const Get = () => {
    const [posts, setPosts] = useState([]);

    // Function to fetch posts
    const getPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    // Function to delete a post
    const deletePost = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE",
            });
            if (response.status === 200) {
                setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
            } else {
                console.error("Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    // Fetch posts when the component mounts
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="posts-container">
            {posts.map((post) => (
                <div className="post-card" key={post.id}>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">{post.body}</p>
                    <div className="button">
                        <div className="delete-btn" onClick={() => deletePost(post.id)}>
                            Delete
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Get;
