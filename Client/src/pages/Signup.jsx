import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../css/user/signup.css'; // 👈 custom CSS

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="text-center mb-4">☕ User Sign In</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mb-3">
            Login
          </Button>

          <div className="text-center">
            <span>Don't have an account? </span>
            <span
              className="signup-link"
              onClick={() => navigate("/registration")}
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
