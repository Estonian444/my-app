import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div>
            <div>
                <img className='hed' src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'/>
            </div>
            <div>
                file + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;