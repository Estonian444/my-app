import React from 'react';
import './MyPosts.css';
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
                <button>Remove</button>
            </div>
            <Post message='Hi, how are you' like= '6' />
            <Post message='Its my first post' like= '15' />

        </div>
    )
}

export default MyPosts;