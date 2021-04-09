import React from 'react'
import "./Comments.css"
import Comment from "./Comment"
import {useState, useEffect} from 'react';


function Comments({id}) {


    const [comments, setComments] = useState([]);


    let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${id}&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g`

 


 
    const apiGet = ()=>{
      fetch(url)
      .then((response)=>response.json())
      .then((videosData)=>{
        setComments(videosData);
      });
    }
  
    useEffect(()=>{
      apiGet();
  }, [])

  if(comments.length!==0){
    console.log(comments)
    return (
        <div className="comments">
        
        <div className="comments-list">
        {
          comments.items.map(item=>{
           
            return <Comment 
              name = {item.snippet.topLevelComment.snippet.authorDisplayName}
              image = {item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              commentz = {item.snippet.topLevelComment.snippet.textOriginal}
              period = {item.snippet.topLevelComment.snippet.publishedAt}
            />
          })
        }
        </div>
        </div>
    )

    
}

return(<div></div>)
}

export default Comments

{/* <div className="comments-list">
{
    [...Array(15)].map(()=>{
       return  <Comment />
    })
}
</div> */}
