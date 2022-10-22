import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const SignUp = () => {
    const { signUp, userProfile, emailVerification } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photoUrl, email, password, confirm);

        if (password !== confirm) {
            setError('Password did not matched');
            return;
        }
        if (password.length < 6) {
            setError('Password must contain at least 6 chatacters');
            return;
        }

        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserProfile(name, photoUrl);
                userEmailVerification();
                Swal.fire('Please check your email to verify the account');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }

    const setUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        };

        userProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    const userEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => {
                console.error(error);
            });
    }

    const handleAccepted = (event) => {
        if (event.target.checked) {
            setAccepted(true);
        }
        else {
            setAccepted(false);
        }
    }


    return (
        <Form onSubmit={handleSubmit} className='text-start'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control name="photoUrl" type="text" placeholder="Your Photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required name="confirm" type="password" placeholder="Retypr Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    label={<Link className='fw-bold' to={'/terms'}>Accept our terms and conditions</Link>} />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='text-danger fw-bold'>{error}</p>
            </Form.Text>
            <Button variant="primary" disabled={(!accepted)} type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SignUp;