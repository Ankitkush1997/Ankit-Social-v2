import { useEffect, useState } from "react";
import { getPosts } from "../../services";
import Post from "../post/Post";
import "./posts.scss";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPostsHandler = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    getPostsHandler();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
