import React from 'react'
import {useState, useEffect} from 'react';
import VideoCard from "./VideoCard";
import moment from 'moment';
import numeral from 'numeral';


function VideoDetails({id}) {

    const[vidDet, setVidDet] = useState([]);

    

    let channelurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g`

const subGet = ()=>{
    fetch(channelurl)
    .then((response)=>response.json())
    .then((subsData)=>{
        setVidDet(subsData);
    });
  }

  useEffect(()=>{
    subGet();
}, [])

if(vidDet.length!==0){

    console.log(vidDet.items[0].snippet.channelTitle);
    
    
    return (
        <VideoCard 
        title={vidDet.items[0].snippet.title}
        id = {vidDet.items[0].id}
        views = {`${numeral(vidDet.items[0].statistics.viewCount).format("0.a")} Views` }
        timestamp={moment(vidDet.items[0].snippet.publishedAt).fromNow()}
        channelImage = {vidDet.items[0].snippet.channelId}
        channel = {vidDet.items[0].snippet.channelTitle}
        image = {vidDet.items[0].snippet.thumbnails.high.url}
        />
    )

}


return(<div></div>)
}

export default VideoDetails

//   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g'

/* <VideoCard 
title={vidDet.items[0].snippet.title}
id = {vidDet.items[0].id}
views = {`${numeral(vidDet.items[0].statistics.viewCount).format("0.a")} Views` }
timestamp={moment(vidDet.items[0].snippet.publishedAt).fromNow()}
channelImage = {vidDet.items[0].snippet.channelId}
channel = {vidDet.items[0].snippet.channelTitle}
image = {vidDet.items[0].snippet.thumbnails.high.url}
/> */
