import React, { useState } from 'react';

import api from '../../services/api';
import axios from 'axios';
import { signIn } from '../../services/auth';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Form, Image, Row } from './styles';

import LogoPrefeitura from '../../assets/logoPrefeitura.png';
import { Alert } from 'react-native';

export default function SignUp({ navigation }) {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [actingField, setActingField] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handRegister() {
        if (password === confirmPassword) {
            const data = {
                name,
                cpf,
                adress: {
                    cep,
                    street,
                    district,
                    city,
                    state
                },
                actingField,
                phoneNumber,
                email,
                password
            };
            await api.post('/artist/create', data).then(() => {
                Alert.alert('Confirmação', `Artista cadastrado com sucesso`);
                navigation.navigate('HomeStack');
            }).catch((err) => {
                Alert.alert('Atenção', `${err.response.data.error}`);
            });
        }
    }

    async function locationAddree(cep) {
        setCep(cep);
        if (cep.length >= 7) {
            let address = await axios({
                method: 'get',
                url: `https://viacep.com.br/ws/${cep}/json/`,
            });
            setStreet(address.data.logradouro);
            setDistrict(address.data.bairro);
            setCity(address.data.localidade);
            setState(address.data.uf)
        }
    }

    return (
        <Container>
            <Form contentContainerStyle={{ paddingBottom: 60 }}>
                <Input
                    placeholder="Nome Completo"
                    value={name}
                    onChangeText={value => setName(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="Campo de atuação"
                    value={actingField}
                    onChangeText={value => setActingField(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={value => setCpf(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="CEP"
                    value={cep}
                    onChangeText={value => locationAddree(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="Endereço"
                    value={(street != '') ? `${street} - ${district} - ${city} / ${state}` : null}
                    editable={false}
                    disabled={true}
                />
                <Input
                    placeholder="E-mail"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="Telefone"
                    value={phoneNumber}
                    onChangeText={value => setPhoneNumber(value)}
                    autoCompleteType="off"
                    clearButtonMode="always"
                    blurOnSubmit={true}
                />
                <Input
                    placeholder="Senha"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                    autoCompleteType="password"
                />
                <Input
                    placeholder="Confirma senha"
                    value={confirmPassword}
                    onChangeText={value => setConfirmPassword(value)}
                    secureTextEntry={true}
                    autoCompleteType="password"
                />
                <Button
                    Text="Cadastrar"
                    style={{ paddingTop: 20 }}
                    onPress={handRegister}
                />
            </Form>
        </Container>
    );
}

SignUp.navigationOptions = { headerTitle: '' };