import React from 'react';

export default function Layout({children}){
    return(
        <div className='container d-flex'>
            {children}
        </div>
    );
}