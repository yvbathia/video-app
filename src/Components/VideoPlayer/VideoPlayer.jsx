import React from "react";
import style from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  return (
    <div className={style.root}>
      <video id="video" controls autoPlay={false} src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4" />
    </div>
  );
};

export default VideoPlayer;
