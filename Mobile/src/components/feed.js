import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Styled from 'styled-components/native';
import IconClose from 'react-native-vector-icons/Fontisto';
import IconStar from 'react-native-vector-icons/FontAwesome';

const ViewMenu = Styled.TouchableOpacity`
    padding: 20px;
`;

const ViewCard = Styled.View`
`;

const Button = Styled.TouchableOpacity`
    margin: 0px 20px 0px 5px;
`;

export const ViewClose = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
`;

export const ModalView = Styled.View`
    padding: 20px;
`;

export default function FeedCard({ file, PhotoProfile = null, title, describe, Users = [], Auth, Post, onPress, Star = false, menu = true }) {

    const [modal, setModal] = useState(false);

    const [star, setStar] = useState(Star);

    const LeftContent = props => {
        return (PhotoProfile != null) ? <Avatar.Image {...props} size={40} source={Photo} /> : <Avatar.Text {...props} size={40} label={Auth} />
    }

    const RigthContet = props => (menu) ? <ViewMenu onPress={() => setModal(!modal)}><Icon {...props} size={30} name='more-vertical' /></ViewMenu> : null;

    const like = () => (star) ? 'star' : 'star-o';

    return (
        <>
            <ViewCard activeOpacity={.7}>
                <Card>
                    <Card.Title
                        left={LeftContent}
                        right={RigthContet}
                    />
                    <Card.Cover source={{ uri: file }} />
                    <Card.Actions>
                        <Button onPress={() => setStar(!star)}>
                            <IconStar name={like()} size={30} color='#FFD700'/>
                        </Button>
                        <Button onPress={() => setStar(!star)}>
                            <IconStar name='comments' size={30} color='#000'/>
                        </Button>
                    </Card.Actions>
                    <Card.Content>
                        <Title>{title}</Title>
                        <Paragraph>{describe}</Paragraph>
                    </Card.Content>
                </Card>
            </ViewCard>
            <Modal visible={modal} onRequestClose={() => setModal(!modal)} presentationStyle='pageSheet' animationType='slide'>
                <ModalView>
                    <ViewClose>
                        <ViewCard onPress={() => setModal(!modal)}>
                            <IconClose name='close-a' size={25} color='#000' />
                        </ViewCard>
                    </ViewClose>
                </ModalView>
            </Modal>
        </>
    )
}