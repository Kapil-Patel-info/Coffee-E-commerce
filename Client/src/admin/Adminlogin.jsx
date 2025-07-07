import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../css/adminLogin.css'; // Custom styles

const AdminLogin = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BackEndUrl}/admin/adminlogin`;
      const response = await axios.post(api, { adminid, password });
      localStorage.setItem("adminid", response.data.adminid);
      navigate("/admindashboard");
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">☕ Admin Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Admin ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your admin ID"
              value={adminid}
              onChange={(e) => setAdminid(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
