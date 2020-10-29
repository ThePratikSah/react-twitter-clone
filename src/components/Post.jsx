import React from "react";
import "./stylesheets/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SaveAltOutlinedIcon from "@material-ui/icons/SaveAltOutlined";

function Post({ displayName, username, verified, text, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar alt="Pratik Sah" src="https://i.imgur.com/qNnTmQ0.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Pratik Sah{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @the_pratik_sah
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to make a twitter clone.</p>
          </div>
        </div>
        {/* <img src="https://i.imgur.com/qNnTmQ0.jpg" alt="Pratik Sah" /> */}
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <SaveAltOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
