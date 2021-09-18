import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img id='content-image' src='https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fff4d8822-0502-11eb-bce8-b17824147865.jpg?crop=1983%2C2479%2C0%2C0' alt='' />
        {props.message}
        <div>
            <span>like</span>
        </div>
    </div>
}

export default Post;