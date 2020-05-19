import React, { useState } from 'react';
import { Avatar, Button, Card, Title, Provider, Portal, Text, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Styled from 'styled-components/native';

const ViewMenu = Styled.TouchableOpacity`
    padding: 20px;
`;

const ViewCard = Styled.TouchableOpacity`
`;

const Body = Styled.View`

`;


export default function FeedCard({ Photo = null, title, Data, Users = [], Auth, Post, onPress,  }) {

    const LeftContent = props => {
        return (Photo != null) ? <Avatar.Image {...props} size={40} source={Photo} /> : <Avatar.Text {...props} size={40} label={Auth} />
    }

    const RigthContet = props => <ViewMenu onPress={onPress}><Icon {...props} size={20} name='more-horizontal' /></ViewMenu>


    return (
        <ViewCard   activeOpacity={.7}>
            <Card>
                <Card.Title
                    left={LeftContent}
                    right={RigthContet}
                />
                <Card.Cover />
                <Card.Content>
                    <Title>Olá</Title>

                </Card.Content>
                <Card.Actions>
                    <Button>Like</Button>
                </Card.Actions>
            </Card>
        </ViewCard>
    )
}