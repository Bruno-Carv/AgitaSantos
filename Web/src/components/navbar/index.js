// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';
import LogoAgitaSantos from '../../assets/logo-agitasantos.png';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import './styles.css';
import { useState } from 'react';

export default function NavBar({ dark, hide, back }) {

    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);

    const Login = () => (
        <>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <button onClick={() => setModalLogin(!modalRegister)} className='btn button-link'>
                            Log in
                    </button>
                </div>
                <div className='col-12 col-lg-6'>
                    <button onClick={() => setModalRegister(!modalRegister)} className='button'>
                        Sign up
                    </button>
                </div>
            </div>
            <Modal show={modalLogin} onHide={() => setModalLogin(!modalLogin)}>
                <Modal.Header>
                    <Modal.Title>Registrar perfil?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Link to='/artist/login' className='btn button'>
                        Artista
                    </Link>
                    <Link to='/user/login' className='btn button'>
                        Usuário
                    </Link>
                </Modal.Footer>
            </Modal>
            <Modal show={modalRegister} onHide={() => setModalRegister(!modalRegister)}>
                <Modal.Header>
                    <Modal.Title>Registrar perfil?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Link to='/artist/login' className='btn button'>
                        Artista
                    </Link>
                    <Link to='/user/login' className='btn button'>
                        Usuário
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );

    const User = () => (
        <div className='row'>
            <div className='col-12 col-lg-4'>

            </div>
            <div className='col-12 col-lg-4'>

            </div>
            <div className='col-12 col-lg-4'>

            </div>
        </div>
    );

    return (
        <Navbar expand="lg" className='navbar-content container'>
            <Navbar.Brand className='logo d-flex justify-content-start'>
                <Link to='/'>
                    <img src={LogoAgitaSantos} alt='Daily Online' />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="navigation">
                <Nav>
                    <div>
                        {
                            isAuthenticated() ? <User /> : <Login />
                        }
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}