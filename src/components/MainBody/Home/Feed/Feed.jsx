import React, { useState } from "react";
import "./Feed.css";
import Upload from "./Upload/Upload";
import Post from "./Post/Post";

function Feed() {
  const [posts, setPosts] = useState([
    {
      displayName: "Jaffer Quint",
      avatar:
        "https://media.istockphoto.com/photos/posrtrait-of-a-handsome-ripped-young-man-picture-id643405454",
      postCaption: "Why are you doing this ?",
      postImage:
        "https://images.carandbike.com/bike-images/medium/ultraviolette/f77/ultraviolette-f77.webp?v=2",
      likesCount: 10,
      commentsCount: 20,
      sharesCount: 40,
    },
    {
      displayName: "Johny Antony",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeYqJhnCoa0xEBHGRr0Kmg8I4sruAdZtHdCg&usqp=CAU",
      postCaption: "Bum on a Bum",
      postImage:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
      likesCount: 14,
      commentsCount: 87,
      sharesCount: 1,
    },
    {
      displayName: "Javed Aktar",
      avatar:
        "https://thumbs.dreamstime.com/z/christmas-makeup-manicure-nails-surprised-woman-face-posrtrait-blonde-girl-short-bob-white-hair-style-red-lips-posing-105633547.jpg",
      postCaption: "Dooooooooont do ittttttttt",
      postImage:
        "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg",
      likesCount: 120,
      commentsCount: 20,
      sharesCount: 3,
    },
  ]);
  return (
    <div className="feed">
      <Upload />
      {posts.map((post) => {
        return (
          <Post
            displayName={post.displayName}
            avatar={post.avatar}
            postCaption={post.postCaption}
            postImage={post.postImage}
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
            sharesCount={post.sharesCount}
          />
        );
      })}
    </div>
  );
}

export default Feed;
