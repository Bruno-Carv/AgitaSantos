import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Input from 'react-input-mask';
import axios from 'axios';
import api from '../../../services/api';
import './styles.css';
import Layout from '../../../layout/layout';
import LogoAgitaSantos from '../../../assets/logo-agitasantos.png';
import ButtonSend from '../../../components/Buttons';

export default function SignUp() {

    const history = useHistory();

    const [loading, setLoading] = useState(false);

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

    async function handRegister(e) {
        e.preventDefault();
        setLoading(true);
        try {
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
                    toast.success(`Artista cadastrado com sucesso`);
                    history.push('/artist/login');
                }).catch((err) => {
                    toast.error(`${err.response.data.error}`);
                });
            }
        } catch{
            setLoading(false);
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
        <Layout>
            <div className="signup-container container-fluid">
                <div className='content'>
                    <signup>
                        <div className='col-12 col-sm-12 col-md- 12 col-lg-12 col-xl-12'>
                            <img src={LogoAgitaSantos} alt='' className='logo' />
                            <h1>Cadastro</h1>
                            <p>Faça seu cadastro, entre na plataforma.</p>
                        </div>
                        <form onSubmit={handRegister}>
                            <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-12 col-xl-12'>
                                <input
                                    placeholder='Nome Completo'
                                    type='text'
                                    value={name}
                                    onChange={value => setName(value.target.value)}
                                />
                            </div>
                            <div className=' pl-3 pr-3 row'>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-8 col-xl-8'>
                                    <Input
                                        placeholder='Campo de atuação'
                                        type='text'
                                        maxLength={11}
                                        value={actingField}
                                        onChange={value => setActingField(value.target.value)}
                                    />
                                </div>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-4 col-xl-4'>
                                    <Input
                                        placeholder='CPF'
                                        type='text'
                                        mask='999.999.999-99'
                                        maskChar={null}
                                        value={cpf}
                                        onChange={value => setCpf(value.target.value)}
                                    />
                                </div>
                            </div>
                            <div className=' pl-3 pr-3 row'>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-3 col-xl-3'>
                                    <Input
                                        placeholder='CEP'
                                        type='text'
                                        mask='99999-999'
                                        maskChar={null}
                                        value={cep}
                                        onChange={value => locationAddree(value.target.value)}
                                    />
                                </div>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-9 col-xl-9'>
                                    <input
                                        placeholder='Endereço'
                                        type='text'
                                        disabled
                                        value={(street !== '') ? `${street} - ${district} - ${city} / ${state}` : null}
                                    />
                                </div>
                            </div>
                            <div className=' pl-3 pr-3 row'>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-8 col-xl-8'>
                                    <input
                                        placeholder='E-mail'
                                        type='email'
                                        value={email}
                                        onChange={value => setEmail(value.target.value)}
                                    />
                                </div>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-4 col-xl-4'>
                                    <Input
                                        placeholder='Telefone'
                                        mask='(99) 99999-9999'
                                        value={phoneNumber}
                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                        maskChar={null}
                                    />
                                </div>
                            </div>
                            <div className=' pl-3 pr-3 row'>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-6 col-xl-6'>
                                    <input
                                        placeholder='Senha'
                                        type='password'
                                        minLength={8}
                                        maxLength={20}
                                        value={password}
                                        onChange={value => setPassword(value.target.value)}
                                    />
                                    <small>Senha no minimo de 8 a 20 caracteres.</small>
                                </div>
                                <div className='form-group col-12 col-sm-12 col-md- 12 col-lg-6 col-xl-6'>
                                    <input
                                        placeholder='Confirma senha'
                                        type='password'
                                        minLength={8}
                                        maxLength={20}
                                        value={confirmPassword}
                                        onChange={value => setConfirmPassword(value.target.value)}
                                    />
                                    <small>Senhas deve ser iguais</small>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md- 12 col-lg-12 col-xl-12'>
                                <ButtonSend
                                    className='button'
                                    type='submit'
                                    textSend='Cadastrar'
                                    finish={loading}
                                />
                            </div>
                            <div className='col-12 col-sm-12 col-md- 12 col-lg-12 col-xl-12'>
                                <Link to="/artist/login" className="back-link">
                                    <FiArrowLeft size={16} color="#E02041" />
                                    Voltar para o login
                                </Link>
                            </div>
                        </form>
                    </signup>

                </div>
            </div>
        </Layout>
    );
}