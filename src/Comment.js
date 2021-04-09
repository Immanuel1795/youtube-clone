import React from 'react'
import moment from "moment"
import "./Comment.css"



function Comment({name, image, commentz, period}) {
console.log();

    return (
        <>
            <div className="comment p-2 d-flex">
                <img src={image} alt="" className="rounded-circle mr-3" />
                <div className="comment-body">
                    <p className="comment-header">
                        {name} • {moment(period).fromNow()}
                    </p>
                    <p>
                        {commentz}
                    </p>
                </div>
            </div>
        </>

    )


}


export default Comment;



//   'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g' 
