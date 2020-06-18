import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({data = []}) {

    const API_KEY = 'AIzaSyDxzEloVcdwEZ7UjP4l07NtubVJ_eLL-ew';

    const [location] = useState({
        center: {
            lat: -23.9618,
            lng: -46.3322
        },
        zoom: 14
    });

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY, language: 'pt', }}
                defaultCenter={location.center}
                defaultZoom={location.zoom}
                onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
                yesIWantToUseGoogleMapApiInternals
            >
                {
                    data.map((event, key) => (
                        <AnyReactComponent
                            key={key}
                            lat={event.latitude}
                            lng={event.longitude}
                            text={event.name}
                        />
                    ))
                }
            </GoogleMapReact>
        </div>
    );
}