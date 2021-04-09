import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import {useState, useEffect} from 'react';
import ChannelDetails from "./ChannelDetails";
import VideoDetails from "./VideoDetails";
import Sidebar from "./Sidebar";

function SearchPage(props) {

  // console.log(props.match.params.searchTerm)
  
  const [searchVids, setsearchVids] = useState([]);

  let searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.match.params.searchTerm}&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g`
 
  const apiGet = ()=>{
    fetch(searchUrl)
    .then((response)=>response.json())
    .then((svids)=>{
      setsearchVids(svids);
    });
  }

  useEffect(()=>{
    apiGet();
}, [])

if(searchVids.length!==0){
  // console.log(searchVids.items)
  return (
    
    <div className="searchVideo">
      <h2>Video Results for <i>{props.match.params.searchTerm}</i></h2>
      <div className="searchVideos__videos" >

      {
        searchVids.items.map(item=>{
         console.log(item);
         if(item.id.kind === "youtube#video") {
            return <VideoDetails id={item.id.videoId}/>
         }
          
          
        })
      }

      {/* <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnj8RtKKAlRthZGyfivC3fsPuYjXW_E0n6P3RoNj=s88-c-k-c0x00ffffff-no-rj"
        channel="Ed Sheeran"
        verified
        subs="46.5M"
        noOfVideos={111}
        description="Music is a Magic"
      />
      <hr />

      <VideoRow
        views="33M"
        subs="46.5M"
        description="The official performance video for Ed Sheeran - Afterglow "
        timestamp="2 weeks ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Afterglow [Official Performance Video]
        "
        image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
      />

      <VideoRow
        views="85M"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. @Stormzy, @Jaykae & @Aitch]"
        timestamp="1 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. Stormzy, Jaykae & Aitch]"
        image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
      />

      <VideoRow
        views="279M"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Beautiful People (feat. @Khalid)"
        timestamp="1 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Beautiful People (feat. Khalid) [Official Music Video]"
        image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
      />

      <VideoRow
        views="2.7B"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Perfect "
        timestamp="3 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Perfect (Official Music Video)"
        image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
      />

      <VideoRow
        views="5.1B"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Shape Of You"
        timestamp="3 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Shape of You (Official Music Video)"
        image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
      />

      <VideoRow
        views="1B"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Photograph"
        timestamp="5 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Photograph (Official Music Video)"
        image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
      /> */}
    </div>
    </div>
  );
}


return(<div></div>)
}

export default SearchPage;
