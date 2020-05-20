import React from 'react';
import { TouchableOpacity, Alert, Linking, Share } from 'react-native';
import {
    ViewClose,
    ViewPost,
    ViewController,
    ViewSocial,
    SocialButton,
    ViewSend,
    Image
} from './styles';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/Fontisto';
import IconSocial from 'react-native-vector-icons/FontAwesome';

export default function Photo({ route, navigation }) {

    const data = navigation.getParam('photo', false);

    const photo = JSON.stringify(data);

    const image = JSON.parse(photo);

    const removePhoto = async () => {
        navigation.navigate('Agita');
    }

    const InstagramSend = () => {
        const encodedUrl = encodeURIComponent(image);
        const instagramUrl = `instagram://share?backgroundImage=${encodedUrl}`;
        Linking.openURL(instagramUrl);
    }

    const onShare = async () => {
        const uri = image;
        Sharing.shareAsync(uri);  
    };

    return (
        <Image source={{ uri: image }} >
            <ViewClose>
                <TouchableOpacity onPress={() => removePhoto()}>
                    <Icon name='close-a' size={25} color='#FFF' />
                </TouchableOpacity>
            </ViewClose>
            <ViewController>
                <ViewPost>
                    <ViewSocial>
                        <SocialButton onPress={() => onShare()}>
                            <IconSocial name='share' size={30} color='#FFF' />
                        </SocialButton>
                        <SocialButton onPress={() => InstagramSend()}>
                            <IconSocial name='instagram' size={30} color='#FFF' />
                        </SocialButton>
                    </ViewSocial>
                    <ViewSend>
                        <Button Text='Posta' IconName='send-o' />
                    </ViewSend>
                </ViewPost>
            </ViewController>
        </Image>
    );
}

Photo.navigationOptions = { headerShown: false };