import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';

export default function GoogleButton() {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
            clientId='205135256224-6b86rq80b54ptkvqvfmloimrg3d7it1u.apps.googleusercontent.com'
            render={renderProps => (
                <button className='social-button google-button' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <FcGoogle size={26} color='#E02041' />
                    Google SingIn
                </button>
            )}
            onSuccess={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );
}