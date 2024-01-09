import React from 'react';
import s from'./Post.module.css'


const Post = (props) => {
    return (

            <div className={s.item}>
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