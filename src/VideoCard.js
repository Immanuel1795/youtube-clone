import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import RChannelImage from "./RecommendedChannelImg";

function VideoCard({ image, title, channel, views, timestamp, channelImage, id }) {
  return (
    <div className="videoCard">
    <Link to= {`/watch/${id}`} >
      <img className="videoCard__thumbnail" src={image} alt=""/>
      </Link>
      <div className="videoCard__info">
       
        <RChannelImage id={channelImage}/>
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

 {/* <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        /> */}
