import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    const navigate=useNavigate();
    return(
        <>
         
           <Form style={{width:"300px", margin:"auto"}}>
             <h1> User Signin</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      If you Don't have Account  
      <span style={{cursor:"pointer", color:"blue", fontWeight:"bold"}} onClick={()=>{navigate("/registration")}}> SignUp </span> now
      <Button variant="primary" type="submit">
        Submit!
      </Button>
    </Form>
        </>
    )
}

export default Signup;