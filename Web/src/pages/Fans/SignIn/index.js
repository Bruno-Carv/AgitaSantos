import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { login, setUser } from '../../../services/auth';
import api from '../../../services/api';
import Layout from '../../../layout/layout';
import LogoAgitaSantos from '../../../assets/logo-agitasantos.png';
import './styles.css';
import { toast } from 'react-toastify';
import ButtonSend from '../../../components/Buttons';

export default function SignIn() {

    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/fans/signin', {
                email,
                password
            }).then((response) => {
                login(response.headers.Tokey);
                setUser(response.data);
                history.push('/fans/home');
            }).catch((err) => {
                toast.error(`${err.response.data.error}`);
            });
        } catch{
            setLoading(false);
        }
    }

    return (
        <Layout>
            <div className="signin-container">
                <div className='content'>
                    <section className='form'>
                        <img src={LogoAgitaSantos} alt='' className='logo' />
                        <form onSubmit={handleLogin} className='row'>
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <h1>Faça seu login</h1>
                            </div>
                            <div className='form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <input
                                    placeholder='E-mail'
                                    type='email'
                                    required
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            <div className='form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <input
                                    type='password'
                                    required
                                    placeholder="Senha"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </div>
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <ButtonSend 
                                    className='button' 
                                    type='submit' 
                                    textSend='Acessar' 
                                    finish={loading}
                                />
                            </div>
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <Link to="/artist/register" className="back-link">
                                    <FiLogIn size={16} color="#E02041" />
                                    Não tenho cadastro
                                </Link>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </Layout>
    );
}