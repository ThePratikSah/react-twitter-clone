import React from "react";
import "./stylesheets/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar alt="Pratik Sah" src="https://i.imgur.com/qNnTmQ0.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
