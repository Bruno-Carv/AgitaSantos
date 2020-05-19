import React, { useEffect, useState } from 'react';
import { ListFeed } from './styles';
import { Modal } from 'react-native';
import { getTokey } from '../../services/auth';
import FeedCard from '../../components/feed';

export default function Home() {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const Tokey = getTokey();
    }, []);

    return (
        <>
            <ListFeed contentContainerStyle={{ paddingBottom: 40 }}>
                <FeedCard
                    onPress={() => setModal(!modal)}
                />
                <FeedCard
                    onPress={() => setModal(!modal)}
                />
                <FeedCard
                    onPress={() => setModal(!modal)}
                />
                <FeedCard
                    onPress={() => setModal(!modal)}
                />
            </ListFeed>
            <Modal visible={modal} onOrientationChange={() => setModal(!modal)} presentationStyle='pageSheet' animationType='slide'> 

            </Modal>
        </>
    );
}