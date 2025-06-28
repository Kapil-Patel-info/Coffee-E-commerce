
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMail, FiLock } from "react-icons/fi";
import "../../css/admin/adminLogin.css";
import UserHeader from "../user/Layouts/UserHeader";
import UserFooter from "../user/Layouts/UserFooter";
import { useState } from "react";
import axios from "axios";
import backendURL from "../../backendURL";
import { useNavigate } from "react-router-dom";


const adminLogin = () => {

  let nevigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleChangeEmail = (e) => {
setEmail(e.target.value);
}

const handleChangePassword = (e) => {
setPassword(e.target.value);
}


const handleSubmit = async(e) => {
  e.preventDefault();
 
  let api = `${backendURL}/adminLogin`;

  try {
     const response = await axios.post(api, { email, password });
     console.log(response);
     
     nevigate("/adminDashboard/home");
     alert("Login Successful!");

  } catch (error) {

    console.error("Error:", error);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Message: ${error.response.data.message}`);
    } else if (error.request) {
      console.error(`Request made but no response: ${error.request}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
    console.error("Error Code:", error.code);
    
  }
 


}
  return (
    <>
     
     <UserHeader/>
      <div className="login-wrapper">
        <div className="login-box" role="main" aria-label="Login form">
          <div className="icon-wrapper" aria-hidden="true">
            <BsFillPersonFill />
          </div>
          <h2 tabIndex="0">Admin Login!</h2>
          <p className="subtext" tabIndex="0">
            Sign in to see your orders and<br />manage subscriptions.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-icon">
              <FiMail />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                required
                onChange={handleChangeEmail}
                value={email}
              />
            </div>
            <div className="input-icon">
              <FiLock />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                required
                onChange={handleChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="btn-signin" aria-label="Sign in">
              SIGN IN
            </button>
          </form>

          <div className="links-wrapper" aria-label="Account links">
            <a href="#create-account" aria-label="Create account link">
              Create account
            </a>
            <span className="divider" aria-hidden="true">
              |
            </span>
            <a href="#forgot-password" aria-label="Forgot password link">
              Forgot password
            </a>
          </div>
        </div>
      </div>

      <UserFooter/>
    </>
  );
};

export default adminLogin;


