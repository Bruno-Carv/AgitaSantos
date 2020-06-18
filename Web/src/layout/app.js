import React, { useState, useEffect } from 'react';

import NavBar from '../components/navbar';
import ResponsiveDrawer from '../components/SideBar';
import { isAuthenticated } from '../services/auth';

export default function App({ children, full }) {
    
    const [container, setContainer] = useState('container');

    useEffect(() => {
        (full) ? setContainer('container-fluid') : setContainer('container');
    },[full]);

    return (
        <>
            {
                (isAuthenticated()) ? (
                    <ResponsiveDrawer>
                        <div className={`${container} p-0`}>
                            {children}
                        </div>
                    </ResponsiveDrawer>
                ) : (
                        <>
                            <NavBar dark={false} />
                            <div className={`d-flex ${container}`}>
                                {children}
                            </div>
                        </>
                    )
            }
        </>
    );
}