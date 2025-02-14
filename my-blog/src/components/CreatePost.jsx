import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreatePost.css";

export function CreatePost({ onAddPost }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({
      ...formData,
      date: new Date().toISOString().split("T")[0],
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="create-post">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Publish Post
        </button>
      </form>
    </div>
  );
}
