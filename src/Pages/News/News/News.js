import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { category_id, image_url, details, title } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='text-start'>
                    {details}
                </Card.Text>
                <NavLink to={`/news_category/${category_id}`} className="primary text-decoration-none text-white bg-primary px-5 py-2 rounded fw-bold">Show All news of this category</NavLink>
            </Card.Body>
        </Card>
    );
};

export default News;