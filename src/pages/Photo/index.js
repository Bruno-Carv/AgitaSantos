import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Linking, Modal, Alert } from 'react-native';
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
import { api, uploadImageAsync } from '../../services/api';
import { getUser } from '../../services/auth';
import Input from '../../components/input';
import FeedCard from '../../components/feed';
import { ScrollView } from 'react-native-gesture-handler';
import Loading from '../../components/loading';

export default function Photo({ navigation }) {

    const data = navigation.getParam('photo', false);
    const photo = JSON.stringify(data);
    const image = JSON.parse(photo);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');


    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);

    const removePhoto = async () => {
        navigation.navigate('Agita');
    }

    async function getDate() {
        await getUser().then((data) => {
            setAuthor(data.artist._id);
        });
    }

    useEffect(() => {
        getDate();
    }, [])

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
        setModal(!modal);

        const upload = await uploadImageAsync('/feeds/upload', image, author);
        const { uri } = await upload.json();
        const file = uri;
        await api.post(`/feeds/create`, {
            title,
            description,
            author,
            file,
        }
        ).then(() => {
            navigation.navigate('HomeStack');
        }).catch((err) => {
            Alert.alert(err);
            setLoading(!loading);
            setModal(!modal);
        });
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
                        <Button Text='Posta' onPress={() => setModal(!modal)} />
                    </ViewSend>
                </ViewPost>
            </ViewController>
            <Modal visible={modal} onRequestClose={() => { setModal(!modal) }} presentationStyle='pageSheet' animationType='slide'>
                <ScrollView>
                    <Input
                        placeholder="Titulo"
                        value={title}
                        onChangeText={value => setTitle(value)}
                    />
                    <Input
                        placeholder="Descrição"
                        value={description}
                        onChangeText={value => setDescription(value)}
                    />
                    <Button Text='Enviar' onPress={() => SendPost()} />
                </ScrollView>
            </Modal>
            <Loading visible={loading} />
        </Image>
    );
}

Photo.navigationOptions = { headerShown: false };