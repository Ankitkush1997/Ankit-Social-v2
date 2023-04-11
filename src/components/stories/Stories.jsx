import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getProfiles } from "../../services";
import "./stories.scss";
const Stories = () => {
  const [stories, setStories] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const getProfilesHandler = async () => {
    const res = await getProfiles();
    setStories(res.data);
  };
  useEffect(() => {
    getProfilesHandler();
  }, []);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.picture} alt={story.firstName + story.lastName} />
          <span>{story.firstName + " " + story.lastName}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
