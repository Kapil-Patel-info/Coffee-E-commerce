import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
import { FaCoffee } from 'react-icons/fa';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = `${BackEndUrl}/user/login`;
            const response = await axios.post(api, { email, password });

            // Save token
            localStorage.setItem("token", response.data.accessToken);

            // Success toast
            toast.success("Login successful! Redirecting...", { position: "top-right" });

            // Redirect after short delay so toast is visible
            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {
            console.error("Login error:", error);

            // If API sends message, show it; else generic error
            const errorMessage = error.response?.data?.message || "Invalid email or password!";
            toast.error(errorMessage, { position: "top-right" });
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
            <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
                <div className="text-center mb-4">
                    <FaCoffee size={32} className="text-primary mb-2" />
                    <h3>Hi Again!</h3>
                    <p className="text-muted">Sign in to see your orders and more</p>
                </div>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mb-3">
                        Sign In
                    </Button>

                    <Row className="text-center">
                        <Col>
                            <Button 
                                variant="link" 
                                className="text-decoration-none p-0"
                                onClick={() => navigate("/registration")}
                            >
                                Create account
                            </Button>
                        </Col>
                        <Col>
                            <Button 
                                variant="link" 
                                className="text-decoration-none p-0"
                                onClick={() => navigate("/forgot-password")}
                            >
                                
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>

            {/* Toast container */}
            <ToastContainer autoClose={2000} />
        </Container>
    );
};

export default Login;
