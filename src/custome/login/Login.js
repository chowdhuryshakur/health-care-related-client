import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle, processLogin, error } = UseAuth();
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
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    function handleEmailLogin() {
        processLogin(email, password)
        console.log(error)
    }
    return (
        <div className='form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label onBlur={handlePasswordChange}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-muted">
                        New User? <Link to='/register'>Register</Link>
                    </Form.Text>
                </Form.Group>
                <Button onClick={handleEmailLogin} className='button' variant="primary" type="submit">
                    Login
                </Button>
                <h6 onClick={handleGoogleLogin} className="goog">Signin with Google</h6>
            </Form>
        </div>
    );
};

export default Login;