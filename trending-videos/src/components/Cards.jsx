
import OneCard from './OneCard'
import React from 'react'

export default function Cards(props) {
    console.log("dcljnsdcj " + props.videos)
    var videoslist = props.videos.map((item, i) => {
        return <OneCard item={item} selectedVideo={props.selectedVideo} />
    })
    return (
        <div>
            {videoslist}
        </div>
    )
}
