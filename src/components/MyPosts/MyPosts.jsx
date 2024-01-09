import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' like= '6' />
                <Post message='Its my first post' like= '15' />
            </div>
        </div>
    )
}

export default MyPosts;