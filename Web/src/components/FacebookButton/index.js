import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';


export default function FacebookButton() {

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <FacebookLogin
            appId='536999856927645'
            callback={responseFacebook}
            cssClass='social-button facebook-button'
            icon={<FaFacebook size={26} color="#FFF" />}
            textButton='Facebook SignIn'
        />
    );
}