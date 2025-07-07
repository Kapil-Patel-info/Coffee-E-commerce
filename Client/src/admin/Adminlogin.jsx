import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const AdminLogin=()=>{
    const [adminid, setAdminid] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   const handleSubmit=async(e)=>{
           e.preventDefault();
           console.log(adminid, password);
           try {
               let api=`${BackEndUrl}/admin/adminlogin`;
             const response = await axios.post(api, {adminid, password});
              localStorage.setItem("adminid", response.data.adminid);
             navigate("/admindashboard");
             console.log(response);
           } catch (error) {
            alert(error.response.data.msg)
              
           }
   }

    return(
        <>
        <h1 align="center"> Admin Login</h1>
         <Form style={{width:"300px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Id</Form.Label>
        <Form.Control type="text"  value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default AdminLogin;