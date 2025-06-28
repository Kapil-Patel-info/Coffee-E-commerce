import UserHeader from "../Layouts/UserHeader";
import UserFooter from "../Layouts/UserFooter";
import { Outlet } from "react-router-dom";


const UserDashboard =()=>{


    return(<>
    
    <UserHeader/>

    <Outlet/>

    <UserFooter/>
    
    </>);
}

export default UserDashboard ;