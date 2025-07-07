
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header=()=>{

const cartData= useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const navigate = useNavigate();


  return(
        <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <span style={{cursor:"pointer"}} onClick={()=>{navigate("/signup")}}> SignIn </span>

         <span className='itemcount'> {cartLength} </span> 

          <FaShoppingCart className='carticon'
          onClick={()=>{navigate("/cartdata")}} style={{cursor:"pointer"}} /> 
        </Container>
      </Navbar>
   
    
        </>
    )
}

export default Header;