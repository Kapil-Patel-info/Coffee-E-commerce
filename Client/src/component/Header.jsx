import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import "../css/Header.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const cartData = useSelector(state => state.mycart.cart);
    const cartLength = cartData.length;
    const navigate = useNavigate();

    const [username, setUsername] = useState(localStorage.getItem("username"));
   

    useEffect(() => {
        const updateUser = () => {
            setUsername(localStorage.getItem("username"));
        };

        window.addEventListener("userChange", updateUser);
        return () => window.removeEventListener("userChange", updateUser);
    }, []);

    const logout = () => {
        localStorage.clear();
        setUsername(null);
        toast.info("User Logged out!", { position: "top-right" });
        window.dispatchEvent(new Event("userChange")); // trigger update
        navigate('/login');
    };

    return (
        <>
            <Navbar expand="lg" className="custom-navbar fixed-top">
                <Container className="justify-content-between">
                    <Navbar.Brand as={Link} to="/home" className="brand-logo">
                        SLEEPY OWL COFFEE
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mx-auto nav-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to="/orders">Orders</Nav.Link> */}
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="navbar-icons ms-auto">
                            <Nav.Link as={Link} to="/search">
                                <FaSearch className='search-icon' />
                            </Nav.Link>
                            <div className="cart-wrapper" onClick={() => navigate("/cartdata")}>
                                <FaShoppingCart className='carticon' />
                                {cartLength > 0 && (
                                    <span className='itemcount'>{cartLength}</span>
                                )}
                            </div>

                            {username ? (
                                <>
                                    <span className="username">Hi, {username}</span>
                                    <span className="logout" onClick={logout}>Logout</span>
                                </>
                            ) : (
                                <Nav.Link as={Link} to="/login" className="login-btn">
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /><br /><br />
        </>
    );
};

export default Header;
