import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/user/routePages/Home";
import About from "./pages/user/routePages/About";
import Contact from "./pages/user/routePages/Contact";
import Cart from "./pages/user/routePages/Cart";
import Search from "./pages/user/routePages/Search";
import UserLogin from "./pages/user/routePages/UserLogin";
import CreateUser from "./pages/user/routePages/CreateUser";
import AdminInsert from "./pages/admin/AdminRoutePages/AdminInsert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

                              
            {/* userlogin */}

         <Route path="/" element={<UserLogin />} />
         <Route path="createUser" element={<CreateUser />} />

        


          {/* Admin */}
          <Route path="/adminDashboard" element={<AdminDashboard />} >

          <Route path="insert" element={<AdminInsert />} />
          

          </Route >






          {/* user routes */}
          <Route path="/userDashboard" element={<UserDashboard />}>
             
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
