import React from 'react';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import SideBarRow from '../SideBarRow/SideBarRow';
// import ReplyIcon from '@mui/icons-material/Reply';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import './VideoInfo.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => {
    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>
            <div className='videoinfo__stats'>
                <p>{viewCount} views • {publishedDate}</p>
                <div className="videoinfo__likes">
                    {/* <SideBarRow Icon={ThumbUpIcon} title={likeCount} />
                    <SideBarRow Icon={ThumbDownIcon} title={dislikeCount} />
                    <SideBarRow Icon={ReplyIcon} title='SHARE' />
                    <SideBarRow Icon={PlaylistAddIcon} title='SAVE' />
                    <SideBarRow Icon={MoreHorizIcon} title='' /> */}
                </div>
            </div>
            <hr />
            <div className="videoinfo__channel">
                <div>
                    <Avatar 
                        className='videoinfo__avatar' 
                        alt={channelTitle} 
                        src={channelImage} 
                    />
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                        {/* <p className='videoinfo__channelsubs'>{subs} subscribers</p> */}
                    </div>
                    
                </div>
                {/* <div className='videoinfo__subscribe'>
                    <Button color='secondary' >SUBSCRIBE</Button>
                </div> */}
            </div>
            <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoInfo;