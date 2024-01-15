import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElement = 
    props.posts.map (p => <Post message={p.message} like={p.like} />)

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} rows={4} cols={40} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;