import React from 'react'
import Comments from './Comments';
import "./PlayVideos.css";
import VideoMetaData from './VideoMetaData';


function PlayVideos(props) {

    
    return (
        <> 
        <div className=" play-vid">
        <div className="player">
            <iframe src={`https://www.youtube.com/embed/${props.match.params.id}`} frameBorder="0" title="myVideo" allowFullScreen width="100%" height="100%"></iframe>
            </div> 
            <VideoMetaData id={props.match.params.id}/>
            <Comments id={props.match.params.id}/>
            </div>

           
       
        
       
        </> 
    )
}

export default PlayVideos;
