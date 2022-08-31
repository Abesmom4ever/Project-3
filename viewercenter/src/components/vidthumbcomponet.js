import VideoThumbnail from 'react-video-thumbnail';
<VideoThumbnail
    videoUrl="../temp video/Alex Jones will hunt down the enemies of Infowars.mp4"
    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
    width={120}
    height={80}
    renderThumbnail={true}
    />

    export default VideoThumbnail;