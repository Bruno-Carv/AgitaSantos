import React, { useState } from 'react';

import api from '../../services/api';
import {signIn} from '../../services/auth';

import Input from '../../components/input';
import Button from '../../components/button';
import Linha from '../../components/linha';

import { Container, Form, Image } from './styles';

import LogoPrefeitura from '../../assets/logoPrefeitura.png';
import { Alert } from 'react-native';

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function signInUser() {
        await api.post('/artist/signIn', {
            email,
            password
        }).then(response => {
            signIn(response.headers.tokey);
            navigation.navigate('HomeStack');
        }).catch(error => {
            Alert.alert('Atenção', error.response.data.error)
        });
    }

    return (
        <Container>
            <Form>
                <Image source={LogoPrefeitura} />
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                    autoCompleteType="password"
                />
                <Button
                    Text="LOG IN"
                    style={{ paddingTop: 20 }}
                    onPress={signInUser}
                />
                <Linha />
            </Form>
        </Container>
    );
}