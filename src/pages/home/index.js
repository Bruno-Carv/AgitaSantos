import React, { useEffect, useState, useReducer } from 'react';
import { ListFeed } from './styles';
import { Modal, FlatList } from 'react-native';
import { getTokey, Auth } from '../../services/auth';
import { api } from '../../services/api';
import FeedCard from '../../components/feed';

export default function Home() {

    const [total, setTotal] = useState(0);
    const [feeds, setFeeds] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(true);

    async function loadFeeds() {
        if (loading) {
            return;
        }

        if (total > 0 && feeds.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('/feeds/read', {
            params: { page }
        });

        setFeeds([...feeds, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    async function resetFeeds(){
        setRefreshing(false);
        const response = await api.get('/feeds/read', {
            params: { page: 1 }
        });
        setFeeds([...response.data]);
    }

    useEffect(() => {
        loadFeeds();
        setRefreshing(false);
    }, []);

    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                onEndReached={loadFeeds}
                onRefresh={resetFeeds}
                refreshing={refreshing}
                data={feeds}
                keyExtractor={(feed) => feed._id}
                onEndReachedThreshold={0.4}
                renderItem={({ item: feed }) => (
                    <FeedCard
                        title={feed.title}
                        file={feed.file}
                        describe={feed.description}
                    />
                )}
            />
        </>
    );
}