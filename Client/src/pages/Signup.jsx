import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
import '../css/user/signup.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const api = `${BackEndUrl}/user/login`;
      const response = await axios.post(api, { email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); 
        localStorage.setItem('userId', email);
         navigate('/home'); 
        alert('✅ Login successful!');
       
      } else {
        alert(response.data.msg || 'Login successful but no token received.');
      }
    } catch (error) {
      console.error(error);
      alert('❌ Login failed. Check credentials or try again.');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="text-center mb-4 h2">☕ User Sign In</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control-custom"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control-custom"
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mb-3 btn-custom">
            Login
          </Button>

          <div className="text-center">
            <span>Don't have an account? </span>
            <span
              className="signup-link"
              onClick={() => navigate('/registration')}
            >
              Sign Up
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
