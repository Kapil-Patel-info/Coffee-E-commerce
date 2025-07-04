import UserHeader from "./User-Layouts/UserHeader";
import UserFooter from "./User-Layouts/UserFooter";
import { Outlet } from "react-router-dom";


const UserDashboard =()=>{


    return(<>
    
    <UserHeader/>

    <Outlet/>

    <UserFooter/>
    
    </>);
}

export default UserDashboard ;