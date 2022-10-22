import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {

    const { _id, details, image_url, rating, title, total_view, author } = news;
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                    <img className='rounded-circle me-3' style={{ width: '60px' }} src={author?.img} alt="" />
                    <div className='text-start d-flex flex-column justify-content-center'>
                        <p className='mt-0 mb-0'>{author.name}</p>
                        <p className='mt-0 mb-0'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                    <FaBookmark className='ms-2'></FaBookmark>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <img className='img-fluid' src={image_url} alt="" />
                <Card.Text className='text-start'>
                    {
                        details?.length > 250 ?
                            <>
                                {details.slice(0, 250) + '...'}
                                <NavLink to={`/news/${_id}`}>Read More</NavLink>
                            </>
                            :
                            <>
                                {details}
                            </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning'></FaStar>
                    <p className='mt-0 mb-0 ms-2'>{rating?.number}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye></FaEye>
                    <p className='mt-0 mb-0 ms-2'>{total_view}</p>
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummeryCard;