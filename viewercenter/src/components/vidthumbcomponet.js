import VideoImageThumbnail from 'react-video-thumbnail-image';
<VideoImageThumbnail
    videoUrl="../temp video/Alex Jones will hunt down the enemies of Infowars.mp4"
    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
    width={100}
    height={20}
    // renderThumbnailHtml={true}
    />

    export default VideoImageThumbnail;