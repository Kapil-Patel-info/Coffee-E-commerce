import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../css/Header.css"

const Header = () => {
    const cartData = useSelector(state => state.mycart.cart);
    const cartLength = cartData.length;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login'); // Redirect to login after logout
    }

    return (
        <>
            <Navbar bg="light" expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="navbar-brand">SLEEPY OWL COFFEE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="shop" className="nav-link">SHOP</Nav.Link>
                        <Nav.Link as={Link} to="instant-coffee" className="nav-link">INSTANT COFFEE</Nav.Link>
                        <Nav.Link as={Link} to="bestsellers" className="nav-link">BESTSELLERS</Nav.Link>
                        <Nav.Link as={Link} to="bulk-orders" className="nav-link">BULK ORDERS</Nav.Link>
                    </Nav>
                    <div className="navbar-icons">
                        <span className="username">Welcome {localStorage.getItem("username")}</span>
                        <span className="logout" onClick={logout}>Logout</span>
                        <FaSearch className='search-icon' />
                        <span className='itemcount'>{cartLength}</span>
                        <FaShoppingCart className='carticon' onClick={() => navigate("/cartdata")} />
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
