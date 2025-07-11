import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
import '../css/user/registation.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [input, setInput] = useState({
    name: '',
    city: '',
    address: '',
    pincode: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const api = `${BackEndUrl}/user/registration`;
      const response = await axios.post(api, input);



      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        alert('Registration successful!');
        navigate('/home');
      } else {
        alert(response.data.msg || 'Registered, but no token returned.');
      }
    } catch (error) {
      console.error("Axios Error:", error);
      alert(error.response?.data?.msg || "Registration failed. Try again.");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2 className="text-center mb-4">☕ User Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={input.name} onChange={handleInput} required placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={input.city} onChange={handleInput} required placeholder="Enter your city" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={input.address} onChange={handleInput} required placeholder="Enter your address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="number" name="pincode" value={input.pincode} onChange={handleInput} required placeholder="Enter your pincode" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={input.email} onChange={handleInput} required placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={input.password} onChange={handleInput} required placeholder="Create a password" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
