import { Outlet } from "react-router-dom";
import AdminHeader from "./Admin-Layout/AdminLoginHeader";
import UserFooter from "../user/User-Layouts/UserFooter";


const AdminDashboard=()=>{
    return(<>
    
    <AdminHeader/>
    <Outlet/>
    <UserFooter/>
    </>);
}


export default AdminDashboard ;

