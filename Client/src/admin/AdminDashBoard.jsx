import { Nav, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaCoffee, FaUpload, FaBoxOpen, FaUsers, FaChartLine, FaSignOutAlt, FaCog } from 'react-icons/fa';
import '../css/AdminDashboard.css'; 

const AdminDashboard = () => {
    const navigate = useNavigate();
    const adminId = localStorage.getItem("adminid");

    const handleLogout = () => {
        localStorage.removeItem("adminid");
        localStorage.removeItem("adminToken");
        navigate('/adminlogin');
    };

    return (
        <Container fluid className="admin-dashboard p-0">
            {/* Admin Header */}
            <header className="admin-header bg-primary text-white p-3 shadow-sm">
                <Row className="align-items-center">
                    <Col md={6} className="d-flex align-items-center">
                        <FaCoffee size={28} className="me-3" />
                        <h3 className="mb-0">Sleepy Owl Admin Dashboard</h3>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <Badge bg="light" text="dark" className="me-3">
                            Welcome, {adminId}
                        </Badge>
                        <Button 
                            variant="outline-light" 
                            size="sm"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt className="me-1" /> Logout
                        </Button>
                    </Col>
                </Row>
            </header>

            <div className="admin-container">
                {/* Sidebar Navigation */}
                <nav className="admin-sidebar bg-light shadow-sm">
                    <Nav defaultActiveKey="/admin" className="flex-column p-3">
                        <Nav.Link 
                            as={Link} 
                            to="uploadproduct" 
                            className="d-flex align-items-center py-3 px-3 rounded"
                        >
                            <FaUpload className="me-2" /> Upload Product
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="customerorder" 
                            className="d-flex align-items-center py-3 px-3 rounded"
                        >
                            <FaBoxOpen className="me-2" /> Customer Orders
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="products" 
                            className="d-flex align-items-center py-3 px-3 rounded"
                        >
                            <FaCoffee className="me-2" /> Manage Products
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="customers" 
                            className="d-flex align-items-center py-3 px-3 rounded"
                        >
                            <FaUsers className="me-2" /> Customer Management
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="analytics" 
                            className="d-flex align-items-center py-3 px-3 rounded"
                        >
                            <FaChartLine className="me-2" /> Sales Analytics
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="settings" 
                            className="d-flex align-items-center py-3 px-3 rounded"
                        >
                            <FaCog className="me-2" /> Settings
                        </Nav.Link>
                    </Nav>
                </nav>

                {/* Main Content Area */}
                <main className="admin-content p-4">
                    <Outlet />
                </main>
            </div>
        </Container>
    );
};

export default AdminDashboard;