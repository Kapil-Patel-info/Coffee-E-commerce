import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminLogin from "./admin/adminlogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import UploadProduct from "./admin/UploadProduct";
import CartData from "./CartData";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import CheckOut from "./pages/CheckOut";
import CustomerOrder from "./admin/CustomerOrder";
import ProductDisplay from "./pages/ProductDisplay";
import Orders from "./pages/orders";
import Edit from "./admin/Edit";
import ShowProducts from "./admin/ShowProducts";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import CustomerFeedback from "./admin/CustomerFeedback";




const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
           <Route path="/admin" element={<AdminLogin/>}></Route>
           <Route path="cartdata" element={<CartData/>}/>
           <Route path="checkout" element={<CheckOut/>} />
           <Route path="productdisplay/:id" element={<ProductDisplay/>}/>
           <Route  path="orders" element={<Orders/>}/>
           <Route path="about" element={<About/>} />
           <Route path="contact" element={<Contact/>}/>
          </Route>
         </Routes>
        
         <Routes>
             <Route path="/admindashboard" element={<AdminDashBoard/>}>
              
            <Route  index element={<CustomerFeedback/>}/>

             <Route path="uploadproduct" element={<UploadProduct/>} />
             <Route path="customerorder" element={<CustomerOrder/>}/> 
             <Route path="edit" element ={<Edit/>} />
             <Route  path="showProducts" element={<ShowProducts/>}/>
              <Route  path="feedback" element={<CustomerFeedback/>}/>


             </Route>
         </Routes>

       </BrowserRouter>
    </>
  )
}
export default App;