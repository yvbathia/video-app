import React from "react";
import style from "./GridContainer.module.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const GridContainer = () => {
  const drop = (event) => {
    try {
      event.preventDefault();
      const target = document.getElementById(event.target.id);
      const video = document.getElementById("videoContainer");
      video.className = `position${Number(event.target.id)}`;
      target.appendChild(video);
      const videoPlayer = document.getElementById("video");
      videoPlayer.pause();
    } catch (e) {
      //
    }
  };

  const drag = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleTouch = (event) => {
    try {
      const x = event.changedTouches[0].pageX;
      const y = event.changedTouches[0].pageY;
      const element = document.elementFromPoint(x, y);
      const target = document.getElementById(element.id);
      const video = document.getElementById("videoContainer");
      video.className = `position${Number(element.id)}`;
      target.appendChild(video);
      const videoPlayer = document.getElementById("video");
      videoPlayer.pause();
    } catch (e) {
      //
    }
  };

  return (
    <div className={style.root}>
      <div
        className={style.grid}
        id={1}
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>
      <div
        className={style.grid}
        id={2}
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>
      <div className={style.grid} id={3} onDrop={drop} onDragOver={allowDrop}>
        <div
          id="videoContainer"
          className="position3"
          draggable="true"
          onDragStart={drag}
          onTouchEnd={handleTouch}
        >
          <VideoPlayer />
        </div>
      </div>
      <div
        className={style.grid}
        id={4}
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>
    </div>
  );
};

export default GridContainer;
