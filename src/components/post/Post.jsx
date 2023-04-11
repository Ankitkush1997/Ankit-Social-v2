import {
  ShareOutlined,
  FavoriteBorderOutlined,
  TextsmsOutlined,
  MoreHoriz,
  FavoriteOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import "./post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.owner.picture} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.owner.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">
                  {post.owner.firstName + " " + post.owner.lastName}
                </span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{post.text}</p>
          <img src={post.image} alt="" />
        </div>
        <div className="info_post">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            {post.likes}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
