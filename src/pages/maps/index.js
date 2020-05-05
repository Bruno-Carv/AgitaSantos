import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import * as Location from 'expo-location';

import { 
    Menu, 
    Search, 
    InputSearch, 
    SearchView, 
    Descript
} from './styles';

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
            <>
                <Search >
                    <Menu
                        onPress={() => navigation.openDrawer()}
                    >
                        <Feather
                            name='menu'
                            size={32}
                            color='black'
                        />
                    </Menu>
                    <SearchView>
                        <InputSearch
                            placeholder="Eventos"
                        />
                    </SearchView>
                </Search>
                <Descript>
                    
                </Descript>
            </>
        </MapView>
    );
}