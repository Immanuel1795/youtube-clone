import React from 'react'
import "./VideoMetaData.css"
import moment from 'moment';
import numeral from "numeral";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ShowMoreText from 'react-show-more-text';
import {useState, useEffect} from 'react';
import Sub from "./Sub"
import ChannelImage from "./ChannelImage";

function VideoMetaData({id}) {
   
    const [videos, setVideos] = useState([]);


    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g`
 
    const apiGet = ()=>{
      fetch(url)
      .then((response)=>response.json())
      .then((videosData)=>{
        setVideos(videosData);
      });
    }
  
    useEffect(()=>{
      apiGet();
  }, [])


  if(videos.length!==0){

  console.log(videos.items)
    return (
        <div className="video-metadata py-2">
        
            <div className="video-matadata-top">
                <h5>{videos.items[0].snippet.title}</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="mr-3">
                        {numeral(videos.items[0].statistics.viewCount).format('0.a')} Views • {moment(videos.items[0].snippet.publishedAt).fromNow()}
                    </span>

                    <div>
                        <span className="mr-3">
                            < ThumbUpAltOutLinedIcon /> {numeral(videos.items[0].statistics.likeCount).format('0.a')}
                        </span>
                        <span>
                            < ThumbDownAltIcon /> {numeral(videos.items[0].statistics.dislikeCount).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="video-matadata-channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <ChannelImage id = {videos.items[0].snippet.channelId}/>
                    <div className="d-flex flex-column">
                        <span>{videos.items[0].snippet.channelTitle}</span>
                        <span>
                        <Sub id = {videos.items[0].snippet.channelId} /> 
                        </span>
                    </div>
                </div>
                <div>
                    <button disabled className="btn border-0 p-2 m-2 btn-danger">Subscribe</button>
                </div>


            </div>
            <div className="video-metadata-desc">
                <ShowMoreText Lines={3} more="SHOW MORE" less="SHOW LESS" anchorClass="show-more-text" expanded={false}>
                   {videos.items[0].snippet.localized.description}
            </ShowMoreText>

            </div>

        </div>
    )

}

return(<div></div>)
}

export default VideoMetaData
