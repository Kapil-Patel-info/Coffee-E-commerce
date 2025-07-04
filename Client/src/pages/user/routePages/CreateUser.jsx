import { useNavigate } from "react-router-dom";
import AdminLoginHeader from "../../admin/Admin-Layout/AdminLoginHeader";
import UserFooter from "../User-Layouts/UserFooter";
import { Container, Button, Card, Form } from "react-bootstrap";
import { FiArrowLeft, FiUserPlus } from "react-icons/fi";

const CreateUser = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-gray">
      <AdminLoginHeader />
      
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Container className="py-4">
          <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: '400px', textAlign: 'center' }}>
            <Card.Body className="p-4">
              <FiUserPlus size={60} className="text-primary mb-3" />
              <h2 className="mb-3">Hi Again!</h2>
              <p className="text-muted mb-4">Fill in the details below to register a new user.</p>

              <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <div className="d-grid gap-2 mt-4">
                  <Button variant="primary" type="submit" size="lg">
                    Create User
                  </Button>
                </div>
              </Form>

              <p className="mt-3">

                <a href="/" className="text-primary"> Forgot password?</a>
              </p>
            </Card.Body>
          </Card>
        </Container>
      </main>

      <UserFooter />
    </div>
  );
};

export default CreateUser;
