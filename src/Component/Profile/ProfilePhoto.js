import React from 'react';
import hamza from '../../assets/hamza.jpg'
const ProfilePhoto = () => {
    return (
        <div>
            
            <img src={hamza} alt='profile image' className='profileImage'/>
        </div> 
    );
};

export default ProfilePhoto;