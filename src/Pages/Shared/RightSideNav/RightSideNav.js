import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaYoutube, FaTwitch, FaTwitter, FaWhatsapp, FaDiscord, FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandSlider from './BrandSlider/BrandSlider';

const RightSideNav = () => {
    const { googleSignIn, gitSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGitSignIn = () => {
        gitSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <ButtonGroup className='d-flex flex-column'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Sign In with Google</Button>
                <Button onClick={handleGitSignIn} variant="outline-dark"><FaGithub></FaGithub> Sign In with GitHub</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <p className='fw-bold text-start'>Find us on</p>
                <ListGroup>
                    <ListGroup.Item className='text-start mt-2 border-2'><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='text-start mt-3 border-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='text-start mt-3 border-2'><FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item className='text-start mt-3 border-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='text-start mt-3 border-2'><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item className='text-start mt-3 border-2'><FaFacebook /> Facebook</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5'>
                {
                    <BrandSlider></BrandSlider>
                }
            </div>
        </div>
    );
};

export default RightSideNav;