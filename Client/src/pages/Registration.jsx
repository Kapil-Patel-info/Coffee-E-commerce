import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
const Registration=()=>{
    const [input, setInput] = useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
       console.log(input);         
    }


   const handleSubmit=async(e)=>{
      e.preventDefault();
       let api=`${BackEndUrl}/user/registration`;
       const response = await axios.post(api, input);
      console.log(response.data);
      alert("You are Succesfully Registered!!");
   }

    return(
        <>
          
            <Form style={{width:"300px", margin:"auto"}}>
             <h1> User SignUp </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin code</Form.Label>
        <Form.Control type="number" name='pincode' onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit!
      </Button>
    </Form>      
        </>
    )
}

export default Registration;