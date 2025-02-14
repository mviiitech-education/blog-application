import { Link } from "react-router-dom";
import "../styles/BlogList.css";

export function BlogList({ posts, onLike }) {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <article key={post.id} className="blog-card">
          <h2>
            <Link to={`/post/${post.id}`} className="blog-title">
              {post.title}
            </Link>
          </h2>
          <div className="blog-meta">
            <span>
              {post.author} • {new Date(post.date).toLocaleDateString()}
            </span>
          </div>
          <p className="blog-excerpt">{post.content.substring(0, 200)}...</p>
          <div className="blog-actions">
            <button onClick={() => onLike(post.id)} className="like-button">
              <span>♥</span>
              <span>{post.likes} likes</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
