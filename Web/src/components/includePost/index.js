import React, { useState, useEffect } from 'react';

import './styles.css';
import { getUser } from '../../services/auth';

export default function IncludePost({photo}) {

    const [photoUser, setPhotoUser] = useState('https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-6.png');

    useEffect(() => {
        let data = getUser();
        setPhotoUser(data.photo);
    },[]);

    useEffect(() => {
        setPhotoUser(photo);
    },[photo]);

    return (
        <div className='include-post-container'>
            <div className='form'>
                <img className='rounded-circle' src={photoUser} alt='' />
                <form>
                    <input type='text' />
                </form>
            </div>
            <div className='option'>
                <div>
                    
                </div>
            </div>
        </div>
    );
}