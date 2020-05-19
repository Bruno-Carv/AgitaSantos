import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import CameraButton from '../../components/CameraButton';
import { ViewCamera, ViewButtonCamera } from './styles';
import { Camera } from 'expo-camera';
import AlbumCamera from '../../components/AlbumCamera';

export default function Cam() {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <ViewCamera>
            <Camera style={{ flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <ViewButtonCamera horizontal={true}>
                        <CameraButton
                            size={60}
                            icon='md-reverse-camera'
                            sizeIcon={25}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}
                        />
                        <CameraButton size={100} icon='md-camera' sizeIcon={40} />
                        <AlbumCamera />
                    </ViewButtonCamera>
                </View>
            </Camera>
        </ViewCamera>
    );
}