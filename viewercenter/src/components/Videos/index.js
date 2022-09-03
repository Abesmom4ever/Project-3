import React, { Component } from 'react';
import Video from "../Video";
import { ajaxPost } from '../../utils/helpers';

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    componentDidMount() {
        let postUrl = "/api/videos/listall";
        let postBody = {};
        ajaxPost(postUrl, postBody, (result) => {
            this.setState({
                videos: result
            })
        });
    };


    render() {
        const videos = this.state.videos;
        console.log(videos);
        let videoList;

        if (!videos) {
            videoList = "there are no videos added!";
        } else {
            videoList = videos.map((video, k) =>
                <Video video={video} key={k} />
            );
        }

        return (
            <div className="list">
                {videoList}
            </div>
        );
    }
}

export default Videos;