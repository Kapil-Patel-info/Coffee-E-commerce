import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import "../css/Header.css";

const Header = () => {
    const cartData = useSelector(state => state.mycart.cart);
    const cartLength = cartData.length;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
            <Navbar expand="lg" className="custom-navbar fixed-top">
                <Container className="justify-content-between">
                    <Navbar.Brand as={Link} to="/home" className="brand-logo">SLEEPY OWL COFFEE</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mx-auto nav-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            {/* <Nav.Link as={Link} to="/products">Products</Nav.Link> */}
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="navbar-icons ms-auto">
                            <FaSearch className='search-icon' />
                            <div className="cart-wrapper" onClick={() => navigate("/cartdata")}>
                                <FaShoppingCart className='carticon' />
                                {cartLength > 0 && (
                                    <span className='itemcount'>{cartLength}</span>
                                )}
                            </div>
                            <span className="username">Hi, {localStorage.getItem("username")}</span>
                            <span className="logout" onClick={logout}>Logout</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br /><br />
        </>
    );
};

export default Header;
