import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { signIn, Auth } from '../../services/auth';
import Input from '../../components/input';
import Button from '../../components/button';
import Linha from '../../components/linha';
import { Container, Form, Image } from './styles';
import LogoAgitaSantos from '../../assets/logo-agitasantos-hori.png';
import { Alert } from 'react-native';
import Loading from '../../components/loading';

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function signInUser() {
        setLoading(!loading);
        await api.post('/artist/signIn', {
            email,
            password
        }).then(response => {
            signIn(response.data);
            navigation.navigate('HomeStack');
        }).catch(error => {
            setLoading(!loading);
            Alert.alert('Atenção', error.response.data.error);
        });
    }

    async function logInAutomatic() {
        await Auth.getUser().then((data) => {
            (data) ? navigation.navigate('HomeStack') : null;
        });
    }
    useEffect(() => {
        logInAutomatic();
    }, []);

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
                <Linha />
                <Button
                    Text="Cadastrar"
                    style={{ paddingTop: 20 }}
                    onPress={() => navigation.navigate('Cadastro')}
                />
            </Form>
            <Loading visible={loading} />
        </Container>
    );
}

SignIn.navigationOptions = { headerShown: false };