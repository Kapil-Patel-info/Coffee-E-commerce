import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaLock, FaUserShield } from "react-icons/fa";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const api = `${BackEndUrl}/admin/adminlogin`;
      const response = await axios.post(api, { adminid, password });

      localStorage.setItem("adminid", response.data.adminid);
      localStorage.setItem("adminToken", response.data.token);
      navigate("/admindashboard");
    } catch (error) {
      console.error("Admin login error:", error);
      setError(error.response?.data?.msg || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Inline CSS */}
      <style>
        {`
          .beans {
            font-size: 40px;
            margin: 10px;
            margin-bottom: 20px;
          }
          .admin-login-container {
            min-height: 100vh;
            background: #f9f9f9;
          }
          .admin-login-container h2 {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      <Container className="admin-login-container d-flex align-items-center justify-content-center">
        <Card
          className="shadow-lg p-4 m-5"
          style={{ width: "100%", maxWidth: "450px" }}
        >
          <div className="text-center mb-4">
            <GiCoffeeBeans className="beans" />
            <h2 className="fw-bold text-dark">Sleepy Owl Admin Portal</h2>
            <p className="text-muted">Secure access to your dashboard</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <hr />
            <p>
              <b>Admin Id : </b>kapilpatelinfo@gmail.com
            </p>
            <p>
              <b>Password : </b>pass@123
            </p>
            <hr />
            <br />
          </div>

          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formAdminId">
              <Form.Label className="d-flex align-items-center">
                <FaUserShield className="me-2 text-secondary" />
                Admin ID
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter admin ID"
                value={adminid}
                onChange={(e) => setAdminid(e.target.value)}
                required
                className="py-2"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label className="d-flex align-items-center">
                <FaLock className="me-2 text-secondary" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="py-2"
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              className="w-100 py-2 mb-3"
              disabled={loading}
            >
              {loading ? <span>Authenticating...</span> : <span>Access Dashboard</span>}
            </Button>

            <div className="text-center small text-muted">
              <p>For authorized personnel only</p>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default AdminLogin;
