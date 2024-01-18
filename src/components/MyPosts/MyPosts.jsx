import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postElement = 
    props.posts.map (p => <Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updataNewPostText(text);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                            value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Опубликовать</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;