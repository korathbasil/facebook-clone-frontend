import React from "react";
import "./Upload.css";
// Material UI elements
import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function Upload({ overlayShowStatusHandler }) {
  return (
    <div className="upload">
      <div className="upload__top">
        <Avatar />

        <input
          onClick={overlayShowStatusHandler}
          type="text"
          placeholder="How  you feeling"
        />
      </div>
      <div className="upload__bottom">
        <div className="upload__bottomItem">
          <VideocamIcon className="upload__bottomLiveVideo" />
          <h4>Live Video</h4>
        </div>
        <div className="upload__bottomItem">
          <PhotoLibraryIcon className="upload__bottomPhotoVideo" />
          <h4>Photo/Video</h4>
        </div>
        <div className="upload__bottomItem">
          <InsertEmoticonIcon className="upload__bottomFeeling" />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default Upload;
