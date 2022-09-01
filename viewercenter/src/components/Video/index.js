import React from 'react';

const Video = (props) => {

  const { _id, videoTitle, videoFilename, createdAt, username } = props.video;

  return (
    <div className="video" key={_id}>
      <div className="video-text">
        <h3>
          {videoTitle}
        </h3>
        <p>Posted by: {username}</p>
        <video width="1280" height="720" controls>
          <source src={videoFilename} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  );
}

export default Video;
