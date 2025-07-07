import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';

const AdminDashBoard = () => {
    return (
        <>
            <div id="adminheader">
                <h3> Welcome To AdminDashboard</h3>
            </div>
            <div>
                Welcome : {localStorage.getItem("adminid")} ! Logout
            </div>
            <hr />
            <div id="container">
                <div id="adminmenu">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link as={Link} to="uploadproduct">Upload Product</Nav.Link>
                        <Nav.Link as={Link} to="/uploadproduct">Upload Product</Nav.Link>
                        <Nav.Link as={Link} to="/uploadproduct">Upload Product</Nav.Link>
                        <Nav.Link as={Link} to="/uploadproduct">Upload Product</Nav.Link>
                        <Nav.Link as={Link} to="/uploadproduct">Upload Product</Nav.Link>

                    </Nav>
                </div>
                <div id="admindata">
                  <Outlet/>
                </div>
            </div>
        </>
    )
}

export default AdminDashBoard;