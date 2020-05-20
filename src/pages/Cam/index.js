import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import CameraButton from '../../components/CameraButton';
import { ViewCamera, ViewButtonCamera } from './styles';
import AlbumCamera from '../../components/AlbumCamera';

const options = { quality: 1, base64: true, fixOrientation: false, exif: true };

export default function Cam({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [hasPermissionRegister, setHasPermissionRegister] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const [camera, setCamera] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            const { statusRegister } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHasPermission(status === 'granted');
            setHasPermissionRegister(statusRegister === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function registerImage() {
        const { uri } = await camera.takePictureAsync(options);
        const asset = await MediaLibrary.createAssetAsync(uri);
        const album = await MediaLibrary.getAlbumAsync('Agita Santos');
        if (!album) {
            await MediaLibrary.createAlbumAsync('Agita Santos', asset).then((result) => {
                navigation.navigate('Photo', { photo: uri });
            }).catch((err) => {
                Alert.alert(err);
            });
        } else {
            await MediaLibrary.addAssetsToAlbumAsync(asset, album).then((result) => {
                navigation.navigate('Photo', { photo: uri });
            }).catch((err) => {
                Alert.alert(err);
            });
        }
    }

    const AlbumImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });
            if (!result.cancelled) {
                navigation.navigate('Photo', { photo: result.uri });
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ViewCamera>
            <Camera style={{ flex: 1 }} type={type} ref={event => setCamera(event)}>
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
                        <CameraButton
                            size={100}
                            icon='md-camera'
                            sizeIcon={40}
                            onPress={() => registerImage()}
                        />
                        <CameraButton 
                            size={60}
                            icon='md-photos'
                            sizeIcon={25}
                            onPress={() => AlbumImage()} />
                    </ViewButtonCamera>
                </View>
            </Camera>
        </ViewCamera>
    );
}

Cam.navigationOptions = { headerShown: false };