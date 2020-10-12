import React from "react";
import "./Timeline.css";
import FriendCard from "../FriendCard/FriendCard";
import Post from "../../Home/Feed/Post/Post";
import Upload from "../../Home/Feed/Upload/Upload";
import useStateContext from "../../../../context/DataLayer";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

function Timeline({ photos, ownAccount }) {
  const [{ selectedUser }, dispatch] = useStateContext();
  return (
    <div className="timeline">
      {!ownAccount && (
        <div className="timeline__request">
          <div className="timeline__requestLeft">
            <h3>Do you know {selectedUser?.displayName}</h3>
          </div>
          <div className="timeline__requestRight">
            <PersonAddIcon />
            <p>Add friend</p>
          </div>
        </div>
      )}
      <div className="timeline__bottom">
        <div className="timeline__bottomLeft">
          <div className="timeline__bottomPhotos">
            <div className="timeline__bottomPhotosTop">
              <h3>Photos</h3>
              <p>See all</p>
            </div>
            <div className="timeline__bottomPhotosContainer">
              {selectedUser?.recentNinePhotos?.map((photo) => {
                return <img src={photo.small} alt="" />;
              })}
            </div>
          </div>
          <div className="timeline__bottomFriends">
            <h3>Friends</h3>
            {selectedUser?.friends?.length == 0 && <h3>No friends yet</h3>}
            <p>17 mutual Friends</p>
            <div className="timeline__bottomFriendsContainer">
              {selectedUser?.friends?.map((friend) => {
                return <FriendCard />;
              })}
            </div>
          </div>
        </div>
        <div className="timeline__bottomRight">
          <Upload />
          {selectedUser?.feed?.map((post) => (
            <Post
              id={post._id}
              key={post._id}
              displayName={post.authorId?.displayName}
              avatar={post.authorId?.profilePicture?.profilePictureUrl}
              postCaption={post.caption}
              postImage={post.image?.medium}
              likesCount={post.likesCount}
              commentsCount={post.commentsCount}
              sharesCount={post.sharesCount}
              commentsDetails={post.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
