import React from 'react';
import GoogleMapReact from '../../../components/maps';
import App from '../../../layout/app';

export default function Eventos(){
    return(
        <App full={true}>
            <GoogleMapReact />
        </App>
    );
}