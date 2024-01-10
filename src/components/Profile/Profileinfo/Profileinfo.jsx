import React from 'react';
import s from './Profileinfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.hed} src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg' />
            </div>
            <div>
                file + description
            </div>
        </div>
    )
}

export default ProfileInfo;