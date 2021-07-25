import React from 'react'
import Story from './Story'
import "./StoryFeed.css"
import {AiOutlineArrowRight} from "react-icons/ai"
const StoryFeed = () => {
    return (
        <div className="storyfeed__container">
            <Story avatarImg={"https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"} 
            contentImg={"https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"}
            authorId="1234" authorName="Mpamphs john"/>
            <Story avatarImg={"https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"} 
            contentImg={"https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"}
            authorId="1234" authorName="Mpamphs john"/>
            <Story avatarImg={"https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"} 
            contentImg={"https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"}
            authorId="1234" authorName="Mpamphs john"/>
            <div className="storyfeed-more">
                <AiOutlineArrowRight className="storyfeed-more-icon"/>
                <span className="storyfeed-more-icon-tooltip">See all stories</span>
            </div>
        </div>
    )
}

export default StoryFeed
