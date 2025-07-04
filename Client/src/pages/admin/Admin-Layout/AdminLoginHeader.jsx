import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiOwl } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import BackendURL from "../../../BackendURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function AdminHeader() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setFormData({ email: "", password: "" });
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const api = `${BackendURL}/admin/adminLogin`;
      const response = await axios.post(api, formData);
      console.log("Front-end-response", response);
      handleClose();
      alert("Login Successful!");
      navigate("/adminDashboard/insert");
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Navbar
       bg="light"
      variant="light"
      expand="lg"
      className="shadow-sm py-3 text-dark .text-secondary"
      sticky="top"
    >
      <Container>
        {/* Logo and Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2 fw-bold"
        >
          <GiOwl size={28} className="text-primary" />
          <span className="fs-5 text-white">Owl Admin</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* Nav Links */}
          <Nav className="align-items-center">
            <Button 
              variant="primary" 
              onClick={handleShow}
              className="d-flex align-items-center gap-2"
            >
              <FiLogIn size={18} />
              <span>Admin Login</span>
            </Button>
          </Nav>
        </Navbar.Collapse>

        {/* Login Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton className="border-0 pb-0">
            <Modal.Title className="fw-bold">Admin Portal</Modal.Title>
          </Modal.Header>
          
          <Modal.Body className="pt-0">
            <div className="text-center mb-4">
              <GiOwl size={48} className="text-primary" />
              <h4 className="mt-2">Welcome Back</h4>
              <p className="text-muted">Enter your credentials to access the dashboard</p>
            </div>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="admin@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  required
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button 
                  variant="primary" 
                  type="submit"
                  disabled={isLoading}
                  className="fw-semibold py-2"
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer className="border-0 justify-content-center">
            <small className="text-muted">
              For security reasons, please keep your credentials confidential
            </small>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;






