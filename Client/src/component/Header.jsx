import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/header.css'; 

const Header = () => {
  const cartData = useSelector(state => state.mycart.cart);
  const cartLength = cartData.length;
  const navigate = useNavigate();

  return (
    <Navbar className="coffee-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="coffee-brand">
          BrewBean
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto coffee-links">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/features">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link> */}
          </Nav>

          <div className="coffee-actions">
            <span className="signin-btn" onClick={() => navigate("/signup")}>
              Sign In
            </span>

            <div className="cart-wrapper" onClick={() => navigate("/cartdata")}>
              <FaShoppingCart className="cart-icon" />
              <span className="cart-count">{cartLength}</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
