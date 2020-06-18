import React from 'react';
import Button from '../../components/button';
import {
    Container,
    ViewDescription,
    Heading,
    Body,
    Description,
    Footer,
    Title,
    Image
} from './styles';

import ArtPintor from '../../assets/Pintor.jpg';

export default function Loading({navigation}) {

    

    return (
        <Container>
            <Image source={ ArtPintor }/>
            <ViewDescription>
                <Heading>
                    <Title>Agite Santos</Title>
                </Heading>
                <Body>
                    <Description>
                        Sejá bem-vindo ao aplicativo Agite Santos, 
                        aqui você será ser possivel se destacar nos eventos
                    </Description>
                </Body>
                <Footer>
                    <Button
                        Text="Acessar" 
                        onPress={() => navigation.navigate('Login')}
                    />
                </Footer>
            </ViewDescription>
        </Container>
    );
}