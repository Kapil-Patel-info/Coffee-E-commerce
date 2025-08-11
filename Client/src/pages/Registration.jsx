import { useState } from 'react';
import { Button, Form, Container, Card, Row, Col } from 'react-bootstrap';
import { FaCoffee, FaUser, FaMapMarkerAlt, FaEnvelope, FaLock, FaHome } from 'react-icons/fa';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        city: '',
        address: '',
        pincode: '',
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = `${BackEndUrl}/user/registration`;
            const response = await axios.post(api, input);

            toast.success("You are successfully registered! Redirecting to home...", { position: "top-right" });

            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error("Registration error:", error);
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
            toast.error(errorMessage, { position: "top-right" });
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="p-4 shadow-lg" style={{ width: '100%', maxWidth: '600px', borderRadius: '15px' }}>
                <div className="text-center mb-4">
                    <FaCoffee size={40} className="text-primary mb-2" />
                    <h2 className="text-dark">Join Sleepy Owl Coffee</h2>
                    <p className="text-muted">Create your account to start your coffee journey</p>
                </div>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label><FaUser className="me-2" />Full Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name" 
                                    placeholder="Enter your full name" 
                                    onChange={handleInput} 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formCity">
                                <Form.Label><FaMapMarkerAlt className="me-2" />City</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="city" 
                                    placeholder="Enter your city" 
                                    onChange={handleInput} 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label><FaHome className="me-2" />Address</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={2} 
                            name="address" 
                            placeholder="Enter your full address" 
                            onChange={handleInput} 
                            required 
                        />
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formPincode">
                                <Form.Label><FaMapMarkerAlt className="me-2" />Pin Code</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="pincode" 
                                    placeholder="Enter pincode" 
                                    onChange={handleInput} 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label><FaEnvelope className="me-2" />Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter email" 
                                    onChange={handleInput} 
                                    required 
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-4" controlId="formPassword">
                        <Form.Label><FaLock className="me-2" />Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            placeholder="Create password" 
                            onChange={handleInput} 
                            required 
                        />
                        <Form.Text className="text-muted">
                            At least 8 characters with a mix of letters and numbers
                        </Form.Text>
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100 py-2 mb-3"
                        style={{ borderRadius: '50px', fontWeight: '600' }}
                    >
                        Create Account
                    </Button>

                    <div className="text-center">
                        <p className="text-muted mb-0">
                            Already have an account?{' '}
                            <Button 
                                variant="link" 
                                className="p-0 text-decoration-none"
                                onClick={() => navigate('/login')}
                            >
                                Sign in
                            </Button>
                        </p>
                    </div>
                </Form>
            </Card>

            <ToastContainer autoClose={2000} />
        </Container>
    );
};

export default Registration;
