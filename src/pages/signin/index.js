import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import {signIn, getTokey} from '../../services/auth';

import Input from '../../components/input';
import Button from '../../components/button';
import Linha from '../../components/linha';

import { Container, Form, Image, ButtonSocial } from './styles';

import LogoAgitaSantos from '../../assets/logo-agitasantos-hori.png';
import { Alert } from 'react-native';
import FacebookBottom from '../../components/facebookSignIn';
import GoogleBottom from '../../components/googleSignIn';

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        try{
            const tokey = getTokey();
            if(tokey){
                navigation.navigate('HomeStack');
            }
        }catch{

        }
    },[]);

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
                <Image source={LogoAgitaSantos} />
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
                    Text="Acessar"
                    style={{ paddingTop: 20 }}
                    onPress={signInUser}
                />
                {/* <ButtonSocial>
                    <FacebookBottom />
                    <GoogleBottom />
                </ButtonSocial> */}
                <Linha />
                <Button
                    Text="Cadastrar"
                    style={{ paddingTop: 20 }}
                    onPress={() => navigation.navigate('Cadastro')}
                />
            </Form>
        </Container>
    );
}

SignIn.navigationOptions = { headerShown: false };