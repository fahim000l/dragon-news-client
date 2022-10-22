import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const navigate = useNavigate();
    const { signIn, setLoader } = useContext(AuthContext);
    const [error, setError] = useState();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {

                    navigate(from, { replace: true });
                }
                else {
                    Swal.fire('Your account is not verified');
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoader(false);
            })
    }
    return (
        <Form onSubmit={handleSubmit} className='text-start'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='text-danger fw-bold'>
                    {error}
                </p>
            </Form.Text>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default SignIn;