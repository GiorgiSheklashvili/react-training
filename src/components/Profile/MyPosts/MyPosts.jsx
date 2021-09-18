import React from 'react';
import p from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return <div className={p.content}>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            <Post message="This is my message" />
            <Post message="This is my second message" />
            <Post />
        </div>
    </div>
}

export default MyPosts;