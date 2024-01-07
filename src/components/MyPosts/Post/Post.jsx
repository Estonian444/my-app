import React from 'react';
import './Post.css'


const Post = (props) => {
    return (

            <div className='item'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pgtssVCCZkG9woVLldlWpVFEHukY1CYsUBB3QZ4zSp8nwYX-V1FvpFskOEOJKijvdsE&usqp=CAU" alt="" />
                    { props.message }
                post 1
                <div>
                    <span>like</span>
                    {props.like}
                </div>
            </div>
    )
}

export default Post;