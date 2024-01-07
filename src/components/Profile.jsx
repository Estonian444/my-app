import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile/Profile.css'


const Profile = () => {
    return (
        <div className='content'>
                <img src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'/>
                <div>file + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;