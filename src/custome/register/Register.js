import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';

const Register = () => {
    const { signInUsingGoogle, registerNewUser } = UseAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handlereg = () => {
        registerNewUser(email, password)
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className='form'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-muted">
                        Have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form.Group>
                <Button onClick={handlereg} className='button' variant="primary" type="submit">
                    Register
                </Button>
                <h6 onClick={handleGoogleLogin} className="goog">Signin with Google</h6>
            </Form>
        </div>
    );
};

export default Register;