import React, { useEffect } from "react";
import "./ProfileMiddleStuffDark.css";
import FeedDark from "../FeedDark/FeedDark";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../../actions/posts";

const ProfileMiddleStuffDark: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const profileid = params?.profileid as string
  useEffect(() => {
    dispatch(getUserPosts(profileid))
  }, [dispatch, profileid])
  const posts = useSelector((posts: any) => posts.posts.postsData);
  return (
    <div>
      <div className="feeds">
        {posts?.map((post: any, index: React.Key) => (
          <FeedDark key={index} posts={post} />
        ))}
        {posts?.length === 0 ? <div style={{ width: "100%", justifyContent: "center", alignItems: "center", height: "70vh", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{
            color: "white",
            fontSize: "1.7rem",
            lineHeight: "3rem"
          }}>Oh no seems like this idiot has no posts tell him to create posts or ︻デ═一</p>
          <img src="https://cdn.discordapp.com/emojis/838743826784845874.png?size=96&quality=lossless" alt="" style={{
            width: "100px",
            height: "100px"
          }} />
        </div> : ""
        }
      </div >
    </div >
  );
};

export default ProfileMiddleStuffDark;
