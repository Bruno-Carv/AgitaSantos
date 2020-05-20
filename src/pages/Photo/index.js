import React, {useState} from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import {Modal, Portal, Provider, ActivityIndicator} from 'react-native-paper';
import {
    ViewClose,
    ViewPost,
    ViewController,
    ViewSocial,
    SocialButton,
    ViewSend,
    Image
} from './styles';
import * as Sharing from 'expo-sharing';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/Fontisto';
import IconSocial from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

export default function Photo({ navigation }) {

    const data = navigation.getParam('photo', false);
    const photo = JSON.stringify(data);
    const image = JSON.parse(photo);
    const [loading, setLoading] = useState(false);

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

    const SendPost = async () => {
        setLoading(!loading);
        try{
            api
        }catch{
            setLoading(!loading);
        }
    }

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
                        <Button Text='Posta' onPress={() => SendPost()} />
                    </ViewSend>
                </ViewPost>
            </ViewController>
            <Provider>
                <Portal>
                    <Modal visible={loading} dismissable={false}>
                        <ActivityIndicator animating={true} size={100} color='#358062' />
                    </Modal>
                </Portal>
            </Provider>
        </Image>
    );
}

Photo.navigationOptions = { headerShown: false };