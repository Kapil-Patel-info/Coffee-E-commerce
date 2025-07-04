import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GiOwl } from 'react-icons/gi'; // Owl logo icon
import { BsCart3, BsSearch } from 'react-icons/bs'; // Bootstrap icons
import { useNavigate } from 'react-router-dom';


function AdminHeader() {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" variant="light" expand="lg" className="border-bottom py-2">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo and Brand */}
        <Navbar.Brand as={Link} to="/userDashboard/home" className="d-flex align-items-center gap-2 fw-bold text-dark">
          <GiOwl size={28} />
          <span className="fs-5">SLEEPY OWL</span>
        </Navbar.Brand>

        {/* Nav Links */}
        <Nav className="gap-3 align-items-center fw-semibold">
          
          <h1> welcome to admin dashboard </h1>

          <Nav.Link as={Link} to="/adminDashboard/insert" className="nav-text active-dot">Insert </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
