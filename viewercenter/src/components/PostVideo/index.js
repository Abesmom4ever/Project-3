import React, { useState } from 'react';
import { ajaxPost } from '../../utils/helpers';

function postVideoSend() {
    const postUrl = '/api/videos/post';
    let video_title = document.getElementById('video_title').value;
    let token = localStorage.getItem('token') || 'notloggedin';
    const postBody = {
        video_title: video_title,
        token: token
    };
    if (video_title)
        ajaxPost(postUrl, postBody, function (result) {
            console.log(result);
        });


}

function PostVideo() {
    return (
        <div>
            <h1>Post Video</h1>

            <p>Video Title:</p> <input type="text" id="video_title" />

            <button
                onClick={() => postVideoSend()}
            >
                SEND
            </button>
        </div>
    );
}

export default PostVideo;