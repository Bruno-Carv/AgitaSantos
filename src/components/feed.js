import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Avatar, Button, Card, Title,  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Styled from 'styled-components/native';

const ViewMenu = Styled.TouchableOpacity`
    padding: 20px;
`;

const ViewCard = Styled.TouchableOpacity`
`;

const Body = Styled.View`

`;


export default function FeedCard({ file ,PhotoProfile = null, title, Data, Users = [], Auth, Post, onPress, menu = true  }) {

    const [modal, setModal] = useState(false);

    const LeftContent = props => {
        return (PhotoProfile != null) ? <Avatar.Image {...props} size={40} source={Photo} /> : <Avatar.Text {...props} size={40} label={Auth} />
    }

    const RigthContet = props => (menu) ? <ViewMenu onPress={() => setModal(!modal)}><Icon {...props} size={30} name='more-vertical' /></ViewMenu> : null;


    return (
        <>
        <ViewCard   activeOpacity={.7}>
            <Card>
                <Card.Title
                    left={LeftContent}
                    right={RigthContet}
                />
                <Card.Cover source={{ uri: file }} />
                <Card.Actions>
                    <Button>Like</Button>
                </Card.Actions>
                <Card.Content>
                    <Title>{title}</Title>
                </Card.Content>
            </Card>
        </ViewCard>
        <Modal visible={modal} onDismiss={() => setModal(!modal)} presentationStyle='pageSheet' animationType='slide'> 
            <Title>{modal}</Title>
        </Modal>
        </>
    )
}