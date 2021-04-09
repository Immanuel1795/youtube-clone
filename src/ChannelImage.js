import React from 'react'
import {useState, useEffect} from 'react';
import numeral from "numeral";
import VideoCard from './VideoCard';

function ChannelImage({id}) {

    const[image, setImage] = useState([]);

    // console.log({id})

    let channelImageUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g`

const imgGet = ()=>{
    fetch(channelImageUrl)
    .then((response)=>response.json())
    .then((img)=>{
      setImage(img);
    });
  }

  useEffect(()=>{
    imgGet();
}, [])




if(image.length!==0){


    return (
        <div>
            <img src={image.items[0].snippet.thumbnails.high.url} alt="" className="rounded-circle mr-3" />
        </div>
    )

}


return(<div></div>)
}

export default ChannelImage;
