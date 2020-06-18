import React, { useState, useEffect } from 'react';
import App from '../../../layout/app';
import ScrollView from 'react-infinite-scroller';
import { Spinner } from 'react-bootstrap';
import FeedCard from '../../../components/FeedCard';
import api from '../../../services/api';
import { getUser } from '../../../services/auth';

export default function Profile() {

    const { artist } = getUser();

    const id = artist._id;
    
    const [total, setTotal] = useState(0);
    const [feeds, setFeeds] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadFeeds() {
        if (loading) {
            return;
        }

        if (total > 0 && feeds.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get(`/feeds/read/user`, {
            params: { id, page }
        });

        setFeeds([...feeds, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);

        console.log(response);
    }

    useEffect(() => {
        loadFeeds();
    }, []);

    return (
        <App>

            <ScrollView
                pageStart={0}
                loadMore={loadFeeds}
                hasMore={loading}
                loader={
                    <div className='d-flex justify-content-center'>
                        <Spinner
                            as="span"
                            animation='border'
                            size='sm'
                            role="status"
                            aria-hidden="true"
                        />
                    </div>
                }
            >
                {feeds.map(feed => (
                    <FeedCard
                        key={feed._id}
                        id={feed._id}
                        title={feed.title}
                        file={feed.file}
                        create={feed.createAt}
                        discribe={feed.description}
                    />
                ))
                }
            </ScrollView>
        </App>
    );
}