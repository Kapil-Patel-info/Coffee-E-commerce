import { Nav, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaCoffee,
  FaUpload,
  FaBoxOpen,
  FaUsers,
  FaChartLine,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminId = localStorage.getItem("adminid");

  const handleLogout = () => {
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminToken");
    navigate("/adminlogin");
  };

  return (
    <>
      {/* Styles inside component */}
      <style>{`
        .admin-dashboard {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .admin-sidebar {
          width: 240px;
          min-height: 100vh;
        }

        .admin-sidebar .nav-link-custom {
          color: white;
          font-weight: 500;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 8px;
          transition: background 0.3s ease;
        }

        .admin-sidebar .nav-link-custom:hover,
        .admin-sidebar .nav-link-custom.active {
          background-color: #343a40;
          text-decoration: none;
        }

        .admin-content {
          min-height: 100vh;
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .admin-sidebar {
            width: 100%;
            min-height: auto;
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <Container fluid className="admin-dashboard p-0">
        {/* Admin Header */}
        <header className="admin-header bg-dark text-white p-3 shadow-sm">
          <Row className="align-items-center">
            <Col xs={12} md={6} className="d-flex align-items-center mb-2 mb-md-0">
              <FaCoffee size={28} className="me-3" />
              <h4 className="mb-0">Sleepy Owl Admin Dashboard</h4>
            </Col>
            <Col xs={12} md={6} className="text-md-end text-start">
              <Badge bg="light" text="dark" className="me-3">
                Welcome, {adminId}
              </Badge>
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                <FaSignOutAlt className="me-1" /> Logout
              </Button>
            </Col>
          </Row>
        </header>

        <div className="admin-container d-flex flex-column flex-md-row">
          {/* Sidebar Navigation */}
          <nav className="admin-sidebar bg-dark text-white shadow-sm p-3">
            <Nav defaultActiveKey="/admin" className="flex-column">
              <Nav.Link as={Link} to="uploadproduct" className="nav-link-custom">
                <FaUpload className="me-2" /> Upload Product
              </Nav.Link>
              <Nav.Link as={Link} to="customerorder" className="nav-link-custom">
                <FaBoxOpen className="me-2" /> Customer Orders
              </Nav.Link>
              <Nav.Link as={Link} to="showProducts" className="nav-link-custom">
                <FaCoffee className="me-2" /> Manage Products
              </Nav.Link>
              <Nav.Link as={Link} to="manageCustomers" className="nav-link-custom">
                <FaUsers className="me-2" /> Customer Management
              </Nav.Link>
              <Nav.Link as={Link} to="feedback" className="nav-link-custom">
                <FaChartLine className="me-2" /> Customer Feedback
              </Nav.Link>
            </Nav>
          </nav>

          {/* Main Content Area */}
          <main className="admin-content flex-fill bg-white p-4">
            <Outlet />
          </main>
        </div>
      </Container>
    </>
  );
};

export default AdminDashboard;
