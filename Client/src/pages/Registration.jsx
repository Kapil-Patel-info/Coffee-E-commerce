import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
import '../css/user/registation.css'; // 👈 custom CSS

const Registration = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BackEndUrl}/user/registration`;
      const response = await axios.post(api, input);
      console.log(response.data);
      alert("You are Successfully Registered!");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="registration-wrapper">
      <div className="registration-card">
        <h2 className="text-center mb-4">☕ User Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="number" name="pincode" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleInput} required />
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
