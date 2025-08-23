import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { FaCoffee } from "react-icons/fa";  

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = `${BackEndUrl}/user/login`;
            const response = await axios.post(api, { email, password });

            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("username", response.data.username);
            alert("Login successful");

            setTimeout(() => {
                navigate("/home");
            }, 1500);

        } catch (error) {
            console.error("Login error:", error);
            alert("Invalid email or password");
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
            <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
                

                <div className="text-center mb-4">
                    <FaCoffee size={30} color="#0d6efd" /> 
                    <h3 className="mt-3">Join Sleepy Owl Coffee</h3>
                    <p className="text-muted">Login Your account to start your coffee journey</p>
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
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;
