import React from 'react'
import {useState, useEffect} from 'react';
import numeral from "numeral";

function Sub({id}) {

    const[subs, setSubs] = useState([]);

    

    let channelurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAsBoMMYM1U5cd8XT2p73yiDZ2GFokA01g`

const subGet = ()=>{
    fetch(channelurl)
    .then((response)=>response.json())
    .then((subsData)=>{
        setSubs(subsData);
    });
  }

  useEffect(()=>{
    subGet();
}, [])




if(subs.length!==0){

    

    return (
        <div>
            {numeral(subs.items[0].statistics.subscriberCount).format('0.a')} Subscribers
        </div>
    )

}


return(<div></div>)
}

export default Sub
