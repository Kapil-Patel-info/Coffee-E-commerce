import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import '../css/adminDashboard.css'; // Import your custom styles
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
    const navigate = useNavigate();
    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h3>☕ Admin Coffee Dashboard</h3>
                <span className="welcome-msg">
                    Welcome: {localStorage.getItem("adminid")} | <span  onClick={()=>navigate('/admin')} className="logout-btn">Logout</span>
                </span>
            </header>

            <div className="admin-main">
                <aside className="admin-sidebar">
                    <Nav defaultActiveKey="/uploadproduct" className="flex-column nav-links">
                        <Nav.Link as={Link} to="uploadproduct">Upload Product</Nav.Link>
                        <Nav.Link as={Link} to="UpdateProducts">Update Products</Nav.Link>
                        <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                        <Nav.Link as={Link} to="users">Users</Nav.Link>
                        <Nav.Link as={Link} to="settings">Settings</Nav.Link>
                    </Nav>
                </aside>

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminDashBoard;
