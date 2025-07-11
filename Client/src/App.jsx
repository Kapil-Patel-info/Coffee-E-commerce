import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminLogin from "./admin/adminlogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import UploadProduct from "./admin/UploadProduct";
import CartData from "./CartData";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="registration" element={<Registration />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="cartdata" element={<CartData />} />
          <Route path="productDetail/:id" element={<ProductDetail />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admindashboard" element={<AdminDashBoard />}>
          <Route path="uploadproduct" element={<UploadProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
