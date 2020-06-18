import React, { useEffect, useState } from 'react';
import App from '../../layout/app';

import { useParams } from 'react-router-dom';

import './styles.css';
import { isAuthenticated } from '../../services/auth';
import api from '../../services/api';

import { Card } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Foto from '../../assets/empreededor.jpg';

export default function FeedDetais() {

    const { post } = useParams();

    const [star, setStar] = useState(false);

    const like = () => (star) ? <FaStar size={30} color='#FFD700' /> : <FaRegStar size={30} color='#FFD700' />;

    const [comments, setComments] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <App>
            <div className='post-container container'>
                <Card className='card-content'>
                    <Card.Header className='card-header secundary-background' >
                        <Avatar className='card-header-avatar' />
                        <div className='card-header-users'>
                            <Card.Title >Bruno</Card.Title>
                            <Card.Subtitle >22/05/2020</Card.Subtitle>
                        </div>
                    </Card.Header>
                    <Card.Img src={Foto} />
                    {
                        isAuthenticated() ? (
                            <Card.Footer className='secundary-background card-footer'>
                                <button className='btn' onClick={() => setStar(!star)}>
                                    {like()}
                                </button>
                            </Card.Footer>
                        ) : null
                    }
                    <Card.Body className='card-body'>
                        <h1>
                            Titulo
                        </h1>
                        <p>
                            Descrição #Alguma coisa
                        </p>
                    </Card.Body>
                    {
                        isAuthenticated() ? (
                            <Card.Body className='post-comments-input'>
                                <Avatar className='avatar' />
                                <form className='d-flex'>
                                    <input type='text' />
                                    <button className='button' type='submit'> Comentar </button>
                                </form>
                            </Card.Body>
                        ) : null
                    }
                    <Card.Body className='post-comments'>
                        <div className='info-user'>
                            <Avatar className='avatar' />
                            <div className='info-user-data'>
                                <Card.Title >Bruno</Card.Title>
                                <Card.Subtitle >22/05/2020</Card.Subtitle>
                            </div>
                        </div>
                        <div className='info-user-comment'>
                            <p>
                                teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </App>
    );
}