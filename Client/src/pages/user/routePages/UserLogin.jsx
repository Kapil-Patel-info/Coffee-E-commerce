import { useNavigate } from "react-router-dom";
import AdminLoginHeader from "../../admin/Admin-Layout/AdminLoginHeader";
import UserFooter from "../User-Layouts/UserFooter";

const UserLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminLoginHeader />

      <h1>user login</h1>

      <button
        onClick={() => 
          navigate("createUser")
        }
      >


        create user
      </button>

      <UserFooter />
    </>
  );
};

export default UserLogin;
