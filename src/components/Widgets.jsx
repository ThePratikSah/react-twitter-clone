import React from "react";
import "./stylesheets/Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1303995079757975552"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="the_pratik_sah"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
