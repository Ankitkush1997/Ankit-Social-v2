import React, { useContext, useEffect, useState } from "react";
import { getComments } from "../../services";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const getCommentsHandler = async () => {
    const res = await getComments();
    setComments(res.data.slice(0, 4));
  };

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getCommentsHandler();
  }, []);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.owner.picture} alt="" />
          <div className="info">
            <span>
              {comment.owner.firstName + " " + comment.owner.lastName}
            </span>
            <p>{comment.message}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
