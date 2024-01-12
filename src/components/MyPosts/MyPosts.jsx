import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

 

    let postElement = 
    props.posts.map (p => <Post message={p.message} like={p.like} />)

    return (
        <div>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;