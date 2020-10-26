import React from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
      <TweetBox />

      {/* posts */}
    </div>
  );
}

export default Feed;
