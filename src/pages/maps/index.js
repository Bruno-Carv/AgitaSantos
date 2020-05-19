import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

import * as Location from 'expo-location';

export default function Maps({ navigation }) {

    const [location, setLocation] = useState({
        latitude: -23.9618,
        longitude: -46.3322,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    const [modal, setModal] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
            }
            let { coords } = await Location.getCurrentPositionAsync({});
            setLocation({
                longitude: coords.longitude,
                latitude: coords.latitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
        })();
    }, []);

    return (
        <MapView
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 28,
                zIndex: -1,
            }}
            initialRegion={location}
            region={location}
            showsMyLocationButton
            showsUserLocation
        >
            <Searchbar style={{ position: 'absolute', top: 40, flex: 1, alignSelf: 'stretch', right: 0, left: 0, marginRight:10,marginLeft:10 }} />
        </MapView>
    );
}