import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>Welcome Home has {allNews.length} news</h1>
            {
                allNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;