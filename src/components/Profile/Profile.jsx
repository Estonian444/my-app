import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo';


const Profile = (props) => {


    
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile;