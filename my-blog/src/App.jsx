import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";
import { CreatePost } from "./components/CreatePost";
import { Header } from "./components/Header";
import "./styles/App.css";

const initialPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a popular JavaScript library for building user interfaces...",
    author: "John Doe",
    date: "2024-02-14",
    likes: 0,
  },
  {
    id: 2,
    title: "Understanding Hooks",
    content:
      "Hooks are a powerful feature in React that allow you to use state...",
    author: "Jane Smith",
    date: "2024-02-13",
    likes: 0,
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1, likes: 0 }]);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<BlogList posts={posts} onLike={handleLike} />}
            />
            <Route
              path="/post/:id"
              element={<BlogPost posts={posts} onLike={handleLike} />}
            />
            <Route
              path="/create"
              element={<CreatePost onAddPost={addPost} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
