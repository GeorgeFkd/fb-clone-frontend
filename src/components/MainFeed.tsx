import React from 'react'
import CreatePost from './CreatePost'
import CreateRoom from './CreateRoom'
import './MainFeed.css'
import PostFeed from './PostFeed'
import StoryFeed from './StoryFeed'
const MainFeed = () => {
    return (
        <div className="mainfeed__container">
            <StoryFeed />
            <CreatePost />
            <CreateRoom />
            <PostFeed />
        </div>
    )
}

export default MainFeed
