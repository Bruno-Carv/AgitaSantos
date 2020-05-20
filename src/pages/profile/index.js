import React, { useState, useEffect } from 'react';
import { getUser, getID } from '../../services/auth';
import api from '../../services/api';
import { Container, PhotoUser, PostCard, CardProfileDate, FeedsList } from './styles';
import { Text, FlatList } from 'react-native';
import FeedCard from '../../components/feed';
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile() {

    //User data
    const [photo, setPhoto] = useState('https://i.pinimg.com/736x/12/6f/bf/126fbff040a01702e8832e64df48d95e.jpg');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [actingField, setActingField] = useState('');
    const [socialNetwork, setSocialNetwork] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    //Feed data
    const [total, setTotal] = useState(0);
    const [feedUser, setFeedUser] = useState([]);
    //Controllers Feed
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function getDate() {
        await getUser().then((data) => {
            setId(data.artist._id);
            setName(data.artist.name);
            setActingField(data.artist.actingField);
            setSocialNetwork(data.artist.socialNetwork);
            setPhoneNumber(data.artist.phoneNumber);
        });
    }

    async function loadFeedsUser() {
        if (loading) {
            return;
        }

        if (total > 0 && feedUser.length === total) {
            return;
        }

        setLoading(true);
        const response = await api.get(`/feeds/read/user`, {
            params: { id, page }
        });

        setFeedUser([...feedUser, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        getDate();
        loadFeedsUser();
    }, []);

    return (
        <>
            <Container>
                <CardProfileDate>
                    <Text>{name}</Text>
                    <Text>{actingField}</Text>
                    <Text>{phoneNumber}</Text>
                </CardProfileDate>
                {
                    feedUser.map((feed) => (
                        <FeedCard
                            key={feed._id}
                            title={feed.title}
                            file={feed.file}
                        />
                    ))
                }
            </Container>
        </>
    );
}