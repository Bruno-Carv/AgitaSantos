import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Foto from '../../assets/empreededor.jpg';
import { Avatar } from '@material-ui/core';
import { FaStar, FaRegStar, FaComments } from 'react-icons/fa';

import './styles.css';

export default function CardFeed({ Star = false, id, create, author, file, title, discribe }) {

    const [star, setStar] = useState(Star);

    const like = () => (star) ? <FaStar size={30} color='#FFD700' /> : <FaRegStar size={30} color='#FFD700' />;

    return (
        <Card className='card-content'>
            <Card.Header className='card-header secundary-background'>
                <Avatar className='card-header-avatar' />
                <div className='card-header-users'>
                    <Card.Title >{author}</Card.Title>
                    <Card.Subtitle >{create}</Card.Subtitle>
                </div>
            </Card.Header>
            <Link to={`/feed/${id}`}>
                <Card.Img src={file} />
            </Link>
            <Card.Footer className='card-footer secundary-background'>
                <button className='btn' onClick={() => setStar(!star)}>
                    {like()}
                </button>
                <Link className='btn' to={`/feed/${id}`}>
                    <FaComments size={30} color='#000' />
                </Link>
            </Card.Footer>
            <Card.Body className='card-body'>
                <h1>
                    {title}
                    </h1>
                <p>
                    {discribe}
                </p>
            </Card.Body>
        </Card>
    );
}