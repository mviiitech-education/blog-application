import { useParams } from "react-router-dom";
import "../styles/BlogPost.css";

export function BlogPost({ posts, onLike }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Post not found</div>;
  }

  return (
    <article className="blog-post">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        <span>
          {post.author} • {new Date(post.date).toLocaleDateString()}
        </span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <button onClick={() => onLike(post.id)} className="like-button">
        <span>♥</span>
        <span>{post.likes} likes</span>
      </button>
    </article>
  );
}
