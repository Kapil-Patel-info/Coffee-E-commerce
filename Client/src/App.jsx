import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/user/routePages/UserDashboard";
import AdminLogin from "./pages/admin/adminLogin";
import Home from "./pages/user/routePages/Home";
import About from "./pages/user/routePages/About";
import Contact from "./pages/user/routePages/Contact";
import Cart from "./pages/user/routePages/Cart";
import Search from "./pages/user/routePages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin */}

          <Route path="/adminLogin" element={<AdminLogin />} />

          {/* user routes */}
          <Route path="/" element={<UserDashboard />}>
            <Route index element={<Home />} />
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
