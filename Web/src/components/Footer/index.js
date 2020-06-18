import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import './styles.css';

export default function Footer() {

    function Year(){
        const data = new Date();
        return data.getFullYear().toString();
    }

    return (
        <footer className='p-4 footer-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-6'>
                                <h3>Code & Prodution</h3>
                            </div>
                            <div className='col-6'>
                                <div className='box-icons'>
                                    <p className='p-title'><span>Nossas redes sociais</span></p>
                                    <ul className='row'>
                                        <div className='col-12 col-lg-3'>
                                            <a href='https://br.linkedin.com' className='d-flex justify-content-between'>
                                                <FaLinkedin size={22} />
                                                <li>LinkedIn</li>
                                            </a>
                                        </div>
                                        <div className='col-12 col-lg-3'>
                                            <a href='https://mobile.twitter.com' className='d-flex justify-content-between'>
                                                <FaTwitter size={22} />
                                                <li>Twitter</li>
                                            </a>
                                        </div>
                                        <div className='col-12 col-lg-3'>
                                            <a href='https://www.facebook.com' className='d-flex justify-content-between'>
                                                <FaFacebook size={22} />
                                                <li>Facebook</li>
                                            </a>
                                        </div>
                                        <div className='col-12 col-lg-3'>
                                            <a href='https://www.instagram.com' className='d-flex justify-content-between'>
                                                <FaInstagram size={22} />
                                                <li>Instagram</li>
                                            </a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            {/* Mensagem de Footer */}
                        </div>
                    </div>
                    <div className='col-12'>
                        <p>Endereço | Santos - SP | Brasil</p>
                        <p>Email: </p>
                        <p>Contatos: </p>
                        <p>{Year()} &copy; Code & Production</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}